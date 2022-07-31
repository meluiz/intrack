import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let win: Electron.BrowserWindow | null

function ready() {
  win = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  win.maximize()
  win.show()

  win.loadURL('http://localhost:3000')
}

function windowAllClosed() {
  if (process.platform !== 'darwin') app.quit()
}

function activate() {
  if (BrowserWindow.getAllWindows().length === 0) ready()
}

app.whenReady().then(ready)
app.on('activate', activate)
app.on('window-all-closed', windowAllClosed)
