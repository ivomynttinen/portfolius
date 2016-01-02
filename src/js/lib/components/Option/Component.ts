import * as knife from '../../vendor/knife/knife'

import OptionModel      from './Model'
import OptionView       from './View'
import OptionController from './Controller'

export default class Option extends knife.Component {
	initialize(options) {
		this.model      = new OptionModel({ text: options.text }, this)
		this.view       = new OptionView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new OptionController({}, this)
	}
}
