"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var win;
function ready() {
    win = new electron_1.BrowserWindow({
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.maximize();
    win.show();
    win.loadURL('http://localhost:3000');
}
function windowAllClosed() {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
}
function activate() {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        ready();
}
electron_1.app.whenReady().then(ready);
electron_1.app.on('activate', activate);
electron_1.app.on('window-all-closed', windowAllClosed);
