'use strict';

import * as knife from '../../vendor/knife/knife'

import ButtonModel      from './Model'
import ButtonView       from './View'
import ButtonController from './Controller'

export default class Button extends knife.Component {
	_getCommandHandlers() {
		return {
			Click: '_click'
		}
	}

	initialize(options) {
		this.model      = new ButtonModel({ text: options.text }, this)
		this.view       = new ButtonView({ model: this.model }, this)
		this.controller = new ButtonController({}, this)
	}

	_click() {
		this.trigger('click')
	}
}
