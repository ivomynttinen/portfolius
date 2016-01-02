var app = require('app')
var BrowserWindow = require('browser-window')

require('crash-reporter').start({
	productName: 'Portfolius',
	companyName: 'edgespan',
	submitURL: 'https://to.do',
	autoSubmit: false
})

var mainWindow = null

app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit()
	}
})

app.on('ready', function () {
	mainWindow = new BrowserWindow({
		width: 1200,
		height: 720,
		minWidth: 1100,
		minHeight: 340,
		titleBarStyle: 'hidden-inset',
		webPreferences: {
			experimentalFeatures: true
		}
	})

	mainWindow.loadURL('file://' + __dirname + '/index.html')
	mainWindow.openDevTools()
	mainWindow.on('closed', function () {
		mainWindow = null
	})
})
