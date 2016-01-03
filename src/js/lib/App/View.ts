import * as knife from '../vendor/knife/knife'

import WelcomePage from '../components/WelcomePage/Component'
import MainPage from '../components/MainPage/Component'

export default class AppView extends knife.View {
	welcomePage:WelcomePage
	mainPage:MainPage

	getComponentName() {
		return 'App'
	}

	_getCommandHandlers() {
		return {}
	}

	initialize(options) {
		this.welcomePage = new WelcomePage({})
		this.mainPage    = new MainPage({})

		this.components.addRange([
			this.welcomePage,
			this.mainPage,
		])
	}
}
