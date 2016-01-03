import * as knife from '../../vendor/knife/knife'

import ListModel      from './Model'
import ListView       from './View'
import ListController from './Controller'

export default class List extends knife.Component {
	initialize(options) {
		this.model      = new ListModel({}, this)
		this.view       = new ListView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new ListController({}, this)
	}
}
