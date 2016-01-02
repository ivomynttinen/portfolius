'use strict';

import * as knife from '../../vendor/knife/knife'

import LabelModel      from './Model'
import LabelView       from './View'
import LabelController from './Controller'

export default class Label extends knife.Component {
	initialize(options) {
		this.model      = new LabelModel({ text: options.text }, this)
		this.view       = new LabelView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new LabelController({}, this)
	}
}
