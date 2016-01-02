'use strict';

import * as knife from '../../vendor/knife/knife'

import ContainerModel      from './Model'
import ContainerView       from './View'
import ContainerController from './Controller'

export default class Container extends knife.Component {
	initialize(options) {
		this.model      = new ContainerModel({ text: options.text }, this)
		this.view       = new ContainerView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new ContainerController({}, this)
	}
}
