import { app, BrowserWindow } from 'electron'
import * as development from 'electron-is-dev'
import * as path from 'path'

let window: Electron.BrowserWindow | null

function ready() {
  window = new BrowserWindow({
    show: false,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(app.getPath('appData'), 'preload.js'),
    },
  })

  window.maximize()
  window.show()

  if (development) window.loadURL('http://localhost:3000')
  else
    window.loadFile(
      `${path.join(app.getPath('appData'), '../build/index.html')}`
    )
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

ipcMain.handle('create-user', function (events, args: User) {
  const users = new Database<User[]>('users')
  const data = users.data
  const user = {
    ...args,
    _id: uuid(),
    created_at: new Date(),
    updated_at: new Date(),
  }

  if (data.length > 5) return

  data.push(user)
  users.write()

  return user
})
