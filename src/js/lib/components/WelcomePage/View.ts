'use strict';

import * as knife from '../../vendor/knife/knife'
import Button from '../Button/Component'
import Label from '../Label/Component'
import Input from '../Input/Component'
import Dropdown from '../Dropdown/Component'

export default class WelcomePageView extends knife.View {
	titleLabel:Label
	subtitleLabel:Label
	nameInput:Input
	countryDropdown:Dropdown
	currencyDropdown:Dropdown
	noteLabel:Label
	createPortfolioButton:Button

	getComponentName() {
		return 'WelcomePage'
	}

	initialize(options) {
		this.titleLabel    = new Label({ text: 'Welcome to Portfolius!' })
		this.subtitleLabel = new Label({ text: 'Let\'s set you up and create your first Portfolio.' })

		this.nameInput = new Input({ placeholder: 'Portfolio Name' })

		this.countryDropdown  = new Dropdown({})
		this.currencyDropdown = new Dropdown({})

		this.noteLabel = new Label({ text: 'Note: you can adjust this later at any time.' })

		this.createPortfolioButton = new Button({ text: 'Create Portfolio' })

		this.components.addRange([
			this.titleLabel,
			this.subtitleLabel,
			this.nameInput,
			this.countryDropdown,
			this.currencyDropdown,
			this.noteLabel,
			this.createPortfolioButton
		])
	}
}
