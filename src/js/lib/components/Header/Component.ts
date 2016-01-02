'use strict';

import * as knife from '../../vendor/knife/knife'

import HeaderModel      from './Model'
import HeaderView       from './View'
import HeaderController from './Controller'

export default class Header extends knife.Component {
	initialize(options) {
		this.model      = new HeaderModel({ text: options.text }, this)
		this.view       = new HeaderView(Object.assign({}, options, { model: this.model }) this)
		this.controller = new HeaderController({}, this)
	}
}
