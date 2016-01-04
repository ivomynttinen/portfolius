/// <reference path="../../../../../typings/tsd.d.ts" />

import * as knife from '../../vendor/knife/knife'

var remote = require('electron').remote
var BrowserWindow = remote.BrowserWindow


//let sellWindow = new BrowserWindow({ width: 540, height: 473 })
//let dividendsWindow = new BrowserWindow({ width: 540, height: 369 })
//let transferWindow = new BrowserWindow({ width: 540, height: 359 })

export default class TransactionWindowView extends knife.View {
	transactionWindow:GitHubElectron.BrowserWindow

	getComponentName() {
		return 'TransactionWindow'
	}

	_getCommandHandlers() {
		return {
			Show: '_show'
		}
	}

	initialize(options) {
		this.element.classList.add('hidden')

		let baseWindow = BrowserWindow.getFocusedWindow()

		baseWindow.on('focus', () => {
			if (this.transactionWindow != null) {
				this.transactionWindow.show()
			}
		})
	}

	_clickHandler(e) {
		console.log('click')
		this.transactionWindow.focus()
	}

	_show(e) {
		this.element.classList.remove('hidden')
		this.transactionWindow = new BrowserWindow({
			width: 540,
			height: 501,
			minWidth: 540,
			titleBarStyle: 'hidden-inset',
			frame: false,
			alwaysOnTop: true,
			webPreferences: {
				experimentalFeatures: true
			},
		})

		this.transactionWindow.loadURL('file://' + __dirname + '/transactions.html')

		this.element.addEventListener('click', this._clickHandler.bind(this))

		this.transactionWindow.on('closed', () => {
			this.element.removeEventListener('click', this._clickHandler)
			this.element.classList.add('hidden')
			this.transactionWindow = null
		})
	}
}
