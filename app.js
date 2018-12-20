const {app, BrowserWindow} = require('electron');
const url = require('url') 
const path = require('path') 

let win

function createWindow() {
	win = new BrowserWindow({frame: false, width: 320, height: 240}) 
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:', 
		slashes: true 
	})); 
	win.setAlwaysOnTop(true, "floating", 1); 
}

app.on('ready', createWindow); 
