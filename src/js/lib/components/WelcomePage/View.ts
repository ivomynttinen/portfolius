'use strict';

import * as knife from '../../vendor/knife/knife'
import Header from '../Header/Component'
import Container from '../Container/Component'
import Button from '../Button/Component'
import Label from '../Label/Component'
import Input from '../Input/Component'
import Dropdown from '../Dropdown/Component'

export default class WelcomePageView extends knife.View {
	mainContainer:Container
	footer:Container
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
		this.mainContainer = new Container({})

		this.titleLabel    = new Label({ text: 'Welcome to Portfolius!' })
		this.subtitleLabel = new Label({ text: 'Let\'s set you up and create your first Portfolio.' })

		this.nameInput = new Input({ placeholder: 'Portfolio Name' })

		this.currencyDropdown = new Dropdown({})

		this.mainContainer.children.addRange([
			this.titleLabel,
			this.subtitleLabel,
			this.nameInput,
			this.currencyDropdown,
		])
	}

	_buildFooter() {
		this.footer = new Container({})

		this.noteLabel = new Label({ text: 'Note: you can adjust this later at any time.' })

		this.createPortfolioButton = new Button({ text: 'Create Portfolio' })

		this.footer.children.addRange([
			this.noteLabel,
			this.createPortfolioButton
		])
	}

	initialize(options) {
		this._buildMainContainer()

		this._buildFooter()

		this.components.addRange([
			this.mainContainer,
			this.footer
		])
	}
}
