import * as knife from '../../vendor/knife/knife'
import Header from '../Header/Component'
import Container from '../Container/Component'
import Button from '../Button/Component'
import Label from '../Label/Component'
import Input from '../Input/Component'
import Option from '../Option/Component'
import Dropdown from '../Dropdown/Component'

export default class WelcomePageView extends knife.View {
	mainContainer:Container
	footer:Container
	innerFooter:Container
	titleLabel:Label
	subtitleLabel:Label
	nameInput:Input
	currencyDropdown:Dropdown
	noteLabel:Label
	createPortfolioButton:Button

	getComponentName() {
		return 'WelcomePage'
	}

	_buildMainContainer() {
		this.mainContainer = new Container({ classes: 'setup' })

		this.titleLabel    = new Label({ text: 'Welcome to Portfolius!', classes: 'welcome-headline' })
		this.subtitleLabel = new Label({ text: 'Let’s set you up and create your first Portfolio.', classes: 'welcome-info' })

		this.nameInput = new Input({ classes: 'gen-input', placeholder: 'Portfolio Name' })

		this.currencyDropdown = new Dropdown({ classes: 'currency-dropdown' })
		this.currencyDropdown.children.addRange([
			new Option({ text: '€ - EUR', value: 'EUR', }),
			new Option({ text: '$ - USD', value: 'USD', }),
			new Option({ text: '£ - GBP', value: 'GBP', }),
			new Option({ text: '$ - AUD', value: 'AUD', }),
		])

		this.mainContainer.children.addRange([
			this.titleLabel,
			this.subtitleLabel,
			this.nameInput,
			this.currencyDropdown,
		])
	}

	_buildFooter() {
		this.footer = new Container({ classes: 'footer' })
		this.innerFooter = new Container({ classes: 'wrap' })

		this.noteLabel = new Label({ text: 'Note: you can adjust this later at any time.' })

		this.createPortfolioButton = new Button({ text: 'Create Portfolio', isEnabled: false })

		this.innerFooter.children.addRange([
			this.noteLabel,
			this.createPortfolioButton,
		])

		this.footer.children.add(this.innerFooter)
	}

	initialize(options) {
		this._buildMainContainer()

		this._buildFooter()

		this.nameInput.on('input', () => {
			if (this.nameInput.get('text').length) {
				this.createPortfolioButton.sendCommand('Enable')
			} else {
				this.createPortfolioButton.sendCommand('Disable')
			}
		})

		this.createPortfolioButton.on('click', () => {
			let portfolio = {
				text:            this.nameInput.get('text'),
				currency:        this.currencyDropdown.get('selectedOption').get('value'),
				stockList:       [],
				transactionList: [],
			}

			this.component.sendCommand('CreatePortfolio', portfolio)
		})

		this.components.addRange([
			this.mainContainer,
			this.footer,
		])
	}
}
