// Store utility for persistent data storage
// Uses electron-settings in Electron environment, localStorage as fallback

declare global {
  interface Window {
    electronStore?: {
      get: (key: string, defaultValue?: any) => Promise<any>;
      set: (key: string, value: any) => Promise<boolean>;
      delete: (key: string) => Promise<boolean>;
      clear: () => Promise<boolean>;
    };
    electronAPI?: {
      isElectron: boolean;
    };
  }
}

interface StoreInterface {
  get(key: string, defaultValue?: any): Promise<any> | any;
  set(key: string, value: any): Promise<void> | void;
}

class UniversalStore implements StoreInterface {
  private isElectron(): boolean {
    return typeof window !== 'undefined' && 
           !!window.electronAPI && 
           window.electronAPI.isElectron === true;
  }

  private async testElectronStore(): Promise<boolean> {
    if (!this.isElectron() || !window.electronStore) {
      return false;
    }
    
    try {
      // Test if electron store is working by trying to get a test value
      await window.electronStore.get('__test__', null);
      return true;
    } catch (error) {
      console.warn('Electron store test failed, falling back to localStorage:', error);
      return false;
    }
  }

  async get(key: string, defaultValue?: any): Promise<any> {
    const prefixedKey = `kmcr_${key}`;
    
    // Try electron-settings first if available and working
    if (await this.testElectronStore()) {
      try {
        return await window.electronStore!.get(prefixedKey, defaultValue);
      } catch (error) {
        console.warn('Error reading from electron-settings, falling back to localStorage:', error);
      }
    }
    
    // Fallback to localStorage
    try {
      const item = localStorage.getItem(prefixedKey);
      if (item === null) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.warn('Error reading from localStorage:', error);
      return defaultValue;
    }
  }

  async set(key: string, value: any): Promise<void> {
    const prefixedKey = `kmcr_${key}`;
    
    // Try electron-settings first if available and working
    if (await this.testElectronStore()) {
      try {
        await window.electronStore!.set(prefixedKey, value);
        return; // Success, no need to use localStorage
      } catch (error) {
        console.warn('Error writing to electron-settings, falling back to localStorage:', error);
      }
    }
    
    // Fallback to localStorage
    try {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    } catch (error) {
      console.warn('Error writing to localStorage:', error);
    }
  }
}

export const store = new UniversalStore();

// Configuration keys
export const CONFIG_KEYS = {
  OZNACZENIE_DYSPONENTA: 'oznaczenie_dysponenta'
} as const;