'use strict';

import * as knife from '../vendor/knife/knife'

import AppModel from './Model'
import AppView from './View'
import AppController from './Controller'

export default class App extends knife.Component {
	initialize(options = {}) {
		this.model      = new AppModel({}, this)
		this.view       = new AppView({ model: this.model }, this)
		this.controller = new AppController({}, this)

		this._initiateRenderSequence()
	}

	_initiateRenderSequence() {
		window.requestAnimationFrame(() => {
			this.render()
			this._initiateRenderSequence()
		})
	}
}
