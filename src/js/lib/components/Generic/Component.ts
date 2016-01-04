import * as knife from '../../vendor/knife/knife'

import GenericModel      from './Model'
import GenericView       from './View'
import GenericController from './Controller'

export default class Generic extends knife.Component {
	initialize(options) {
		this.model      = new GenericModel({}, this)
		this.view       = new GenericView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new GenericController({}, this)
	}
}
