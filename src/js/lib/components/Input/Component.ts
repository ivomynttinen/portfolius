import * as knife from '../../vendor/knife/knife'

import InputModel      from './Model'
import InputView       from './View'
import InputController from './Controller'

export default class Input extends knife.Component {
	initialize(options) {
		this.model      = new InputModel({ text: options.text }, this)
		this.view       = new InputView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new InputController({}, this)
	}
}
