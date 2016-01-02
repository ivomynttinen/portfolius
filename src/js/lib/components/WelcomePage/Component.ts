import * as knife from '../../vendor/knife/knife'

import WelcomePageModel      from './Model'
import WelcomePageView       from './View'
import WelcomePageController from './Controller'

export default class WelcomePage extends knife.Component {
	_getCommandHandlers() {
		return {}
	}

	initialize(options) {
		this.model      = new WelcomePageModel({}, this)
		this.view       = new WelcomePageView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new WelcomePageController({}, this)
	}
}
