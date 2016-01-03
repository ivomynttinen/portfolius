import * as knife from '../../vendor/knife/knife'

import InputModel      from './Model'
import InputView       from './View'
import InputController from './Controller'

export default class Input extends knife.Component {
	_getCommandHandlers() {
		return {
			Input: '_input',
		}
	}

	initialize(options) {
		this.model      = new InputModel({ text: options.text }, this)
		this.view       = new InputView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new InputController({}, this)
	}

	_input() {
		this.trigger('input')
	}
}
