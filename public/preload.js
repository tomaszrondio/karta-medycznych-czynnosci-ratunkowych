const { contextBridge, ipcRenderer } = require('electron');

// Expose electron-settings operations to the renderer process
contextBridge.exposeInMainWorld('electronStore', {
  get: (key, defaultValue) => ipcRenderer.invoke('store-get', key, defaultValue),
  set: (key, value) => ipcRenderer.invoke('store-set', key, value),
  delete: (key) => ipcRenderer.invoke('store-delete', key),
  clear: () => ipcRenderer.invoke('store-clear')
});

// Expose other electron APIs if needed
contextBridge.exposeInMainWorld('electronAPI', {
  printForm: () => ipcRenderer.send('print-form'),
  isElectron: true
});