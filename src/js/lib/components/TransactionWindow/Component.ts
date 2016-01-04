import * as knife from '../../vendor/knife/knife'

import TransactionWindowModel      from './Model'
import TransactionWindowView       from './View'
import TransactionWindowController from './Controller'

export default class TransactionWindow extends knife.Component {
	_getCommandHandlers() {
		return {
			Show: '_show'
		}
	}

	initialize(options) {
		this.model      = new TransactionWindowModel({}, this)
		this.view       = new TransactionWindowView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new TransactionWindowController({}, this)
	}

	_show(e) {
		this.view.sendCommand('Show')
	}
}
