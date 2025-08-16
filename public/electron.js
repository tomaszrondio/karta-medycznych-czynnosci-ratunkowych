const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const settings = require('electron-settings');

// Configure electron-settings to use userData directory with explicit file name
try {
  const userDataPath = app.getPath('userData');
  settings.configure({
    dir: userDataPath,
    fileName: 'settings.json'
  });
  console.log('Electron-settings configured with userData dir:', userDataPath);
  console.log('Settings file path:', path.join(userDataPath, 'settings.json'));
  
  // Test if we can write to the settings file
  settings.set('__app_test__', 'test_value').then(() => {
    console.log('Settings write test successful');
    settings.unset('__app_test__');
  }).catch((error) => {
    console.error('Settings write test failed:', error);
  });
} catch (error) {
  console.error('Error configuring electron-settings:', error);
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'icon.png')
  });

  const startUrl = process.env.ELECTRON_IS_DEV === 'true'
    ? 'http://localhost:3000' 
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startUrl);

  if (process.env.ELECTRON_IS_DEV === 'true') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Create menu template
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Form',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow.webContents.send('new-form');
          }
        },
        {
          label: 'Print',
          accelerator: 'CmdOrCtrl+P',
          click: () => {
            mainWindow.webContents.print({
              silent: false,
              printBackground: true,
              margins: {
                marginType: 'none'
              }
            });
          }
        },
        { type: 'separator' },
        {
          label: 'Exit',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle print request
ipcMain.on('print-form', () => {
  if (mainWindow) {
    mainWindow.webContents.print({
      silent: false,
      printBackground: true,
      margins: {
        marginType: 'none'
      }
    });
  }
});

// Handle electron-settings operations
ipcMain.handle('store-get', async (event, key, defaultValue) => {
  try {
    console.log('Getting setting:', key);
    const value = await settings.get(key, defaultValue);
    console.log('Retrieved setting:', key, '=', value);
    return value;
  } catch (error) {
    console.error('Error getting setting:', key, error);
    return defaultValue;
  }
});

ipcMain.handle('store-set', async (event, key, value) => {
  try {
    console.log('Setting:', key, '=', value);
    await settings.set(key, value);
    console.log('Successfully set setting:', key);
    return true;
  } catch (error) {
    console.error('Error setting value:', key, error);
    return false;
  }
});

ipcMain.handle('store-delete', async (event, key) => {
  try {
    await settings.unset(key);
    return true;
  } catch (error) {
    console.error('Error deleting setting:', error);
    return false;
  }
});

ipcMain.handle('store-clear', async () => {
  try {
    await settings.reset();
    return true;
  } catch (error) {
    console.error('Error clearing settings:', error);
    return false;
  }
});