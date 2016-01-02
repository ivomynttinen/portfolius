import * as knife from '../../vendor/knife/knife'

import ButtonModel      from './Model'
import ButtonView       from './View'
import ButtonController from './Controller'

export default class Button extends knife.Component {
	_getCommandHandlers() {
		return {
			Click:   '_click',
			Disable: '_disable',
			Enable:  '_enable',
		}
	}

	initialize(options) {
		this.model      = new ButtonModel({ text: options.text, isEnabled: options.isEnabled }, this)
		this.view       = new ButtonView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new ButtonController({}, this)
	}

	_click() {
		this.trigger('click')
	}

	_disable() {
		this.model.set('isEnabled', false)
		this.invalidate()
	}

	_enable() {
		this.model.set('isEnabled', true)
		this.invalidate()
	}
}
