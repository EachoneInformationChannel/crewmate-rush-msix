const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadURL('https://crewmate-rush-space-escape-runner.ai.studio');
}

app.whenReady().then(createWindow);
