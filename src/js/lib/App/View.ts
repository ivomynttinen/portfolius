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
		return {
			ShowMainPage:    '_showMainPage',
			ShowWelcomePage: '_showWelcomePage',
		}
	}

	initialize(options) {
		this.welcomePage = new WelcomePage({})
		this.mainPage    = new MainPage({ portfolios: options.portfolios })

		if (options.portfolios.length) {
			this.sendCommand('ShowMainPage')
		} else {
			this.sendCommand('ShowWelcomePage')
		}

		this.welcomePage.on('createdFirstPortfolio', (e) => {
			this.mainPage.set('portfolios', [e.data]).invalidate()
			this.sendCommand('ShowMainPage')
		})

		this.mainPage.on('removedLastPortfolio', (e) => {
			this.sendCommand('ShowWelcomePage')
		})

		this.components.addRange([
			this.welcomePage,
			this.mainPage,
		])
	}

	_showMainPage() {
		this.welcomePage.view.element.classList.add('hidden')
		this.mainPage.view.element.classList.remove('hidden')
	}

	_showWelcomePage() {
		this.welcomePage.view.element.classList.remove('hidden')
		this.mainPage.view.element.classList.add('hidden')
	}
}
