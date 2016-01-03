import * as knife from '../../vendor/knife/knife'

import Header from '../Header/Component'
import Button from '../Button/Component'
import Container from '../Container/Component'
import Sidebar from '../Sidebar/Component'

export default class MainPageView extends knife.View {
	header:Header
	modeButtons:Container
	transactionButton:Button
	viewButtons:Container
	historyButton:Button
	lineButton:Button

	mainContainer:Container
	sidebar:Sidebar
	overviewContainer:Container


	getComponentName() {
		return 'MainPage'
	}

	_buildHeader() {
		this.header = new Header({})

		this.modeButtons = new Container({ classes: ['button-group', 'mode-buttons'] })
		this.transactionButton = new Button({ text: 'Transaction', classes: 'transaction' })

		this.modeButtons.children.add(this.transactionButton)

		this.viewButtons = new Container({ classes: ['button-group', 'view-buttons'] })

		this.historyButton = new Button({ classes: 'history' })
		this.lineButton = new Button({ classes: 'line' })

		this.viewButtons.children.addRange([
			this.historyButton,
			this.lineButton,
		])

		this.header.children.addRange([
			this.modeButtons,
			this.viewButtons,
		])
	}

	_buildMainContainer() {
		this.mainContainer = new Container({ classes: 'main-container' })

		this.sidebar = new Sidebar({})

		this.overviewContainer = new Container({ classes: 'overview-container' })

		this.dark = new Container({ classes: 'dark' })

		this.listsContainer = new Container({ classes: 'lists' })
		this.portfolioOverview = new Container({ classes: 'portfolio-overview hidden' })
		this.portfolioHistory = new Container({ classes: 'history-container' })

		this.listsContainer.children.addRange([
			this.portfolioOverview,
			this.portfolioHistory,
		])

		this.overviewContainer.children.addRange([
			this.dark,
			this.listsContainer,
		])

		this.mainContainer.children.addRange([
			this.sidebar,
			this.overviewContainer,
		])
	}

	initialize(options) {
		this._buildHeader()

		this._buildMainContainer()

		;(window as any).mainPage = this

		this.sidebar.on('createPortfolio', () => {
			this.component.sendCommand('CreatePortfolio')
		})

		this.sidebar.on('removePortfolio', () => {
			this.component.sendCommand('RemovePortfolio')
		})

		this.model.on('set', (e, key, value) => {
			if (key === 'portfolios') {
				this.sidebar.set('portfolios', value)
				this.sidebar.invalidate()
			}
		})

		this.components.addRange([
			this.header,
			this.mainContainer,
		])
	}
}
