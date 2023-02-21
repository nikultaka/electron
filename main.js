const { app, BrowserWindow,BrowserView, ipcMain } = require('electron')
const path = require('path')


const createWindow = () => {
  //const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow({
    //width: width,
    //height:height,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag:true
    },
  });
  //win.maximize();
  //win.show();
  //ipcMain.handle('ping', () => 'pong')
  win.loadFile('index.html');
  
};

// mainWindow.once('ready-to-show', () => {
//   mainWindow.maximize()
// })

app.whenReady().then(() => {
  // createWindow();
  // app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      // createWindow();
      const win = new BrowserWindow({show :false}) // width: 1000, height: 1000 
      win.maximize();
      win.show();
      const view = new BrowserView()
      win.setBrowserView(view)
      const { width, height } = win.getContentBounds();
      view.setBounds({ x: 0, y: 0, width: width, height: height })
      view.webContents.loadURL('https://pos.palladiumhub.com/admin/authentication')
    }
  // });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});