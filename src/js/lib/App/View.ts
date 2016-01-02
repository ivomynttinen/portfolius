'use strict';

import * as knife from '../vendor/knife/knife'

import WelcomePage from '../components/WelcomePage/Component'

export default class AppView extends knife.View {
	welcomePage:WelcomePage

	getComponentName() {
		return 'App'
	}

	_getCommandHandlers() {
		return {}
	}

	initialize(options) {
		this.welcomePage = new WelcomePage({})

		this.components.add(this.welcomePage)
	}
}
