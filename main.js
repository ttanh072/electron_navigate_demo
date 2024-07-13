const { app, BrowserWindow, ipcMain } = require('electron');

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`, // Add preload script
            contextIsolation: true // Important for security
        }
    });

    // Load the index.html of the app.
    win.loadFile('dist/index.html');

    // Open the DevTools.
    win.webContents.openDevTools();
}

// Handle the navigate event
ipcMain.on('navigate', (event, url) => {
    if (win) {
        win.loadURL(url);
    }
});

app.whenReady().then(createWindow);

// ... omitted for brevity