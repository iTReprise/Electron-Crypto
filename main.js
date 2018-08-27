const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    frame: false,
    show: false,
    resizable: false,
    transparent: true,
  });

  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  mainWindow.on('close', () => { mainWindow = null; });
}

app.on('ready', () => {
  createWindow();
  mainWindow.on('ready-to-show', () => { mainWindow.show(); });
});
app.on('window-all-closed', () => {
  app.quit();
});
app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
