const { contextBridge, ipcRenderer } = require('electron');

// Expose the navigate function to the renderer process
contextBridge.exposeInMainWorld('electron', {
    navigate: (url) => ipcRenderer.send('navigate', url)
});