import * as knife from '../../vendor/knife/knife'

import Label from '../Label/Component'
import Input from '../Input/Component'
import Portfolio from '../../shared/Portfolio'
import * as helpers from '../../shared/helpers'

let remote   = require('electron').remote
let Menu     = remote.Menu
let MenuItem = remote.MenuItem

export default class PortfolioListItemView extends knife.View {
	element:HTMLLIElement
	nameLabel:Label
	valueLabel:Label
	nameInput:Input

	getComponentName() {
		return 'PortfolioListItem'
	}

	_createElement() {
		return document.createElement('li')
	}

	_getCommandHandlers() {
		return {
			StartRename:  '_startRename',
			CancelRename: '_cancelRename',
			FinishRename: '_finishRename',
			StartDelete:  '_startDelete',
			Focus:        '_focus',
			Defocus:      '_defocus',
		}
	}

	_startRename() {
		this.nameLabel.view.element.classList.add('hidden')
		this.nameInput.view.element.classList.remove('hidden')
		this.nameInput.view.element.focus()
	}

	_cancelRename() {
		this.nameLabel.view.element.classList.remove('hidden')
		this.nameInput.view.element.classList.add('hidden')
	}

	_finishRename() {
		this.component.sendCommand('UpdatePortfolio', { name: this.nameInput.get('text') })
		this.nameLabel.view.element.classList.remove('hidden')
		this.nameInput.view.element.classList.add('hidden')
	}

	_startDelete() {
		setTimeout(() => {
			if (confirm('Do you really want to delete this Portfolio?')) {
				this.component.sendCommand('DeletePortfolio')
			}
		}, 10)
	}

	_focus() {
		this.element.classList.add('focus')
	}

	_defocus() {
		this.element.classList.remove('focus')
	}

	_buildContextMenu() {
		let menu = new Menu()

		let renameItem = new MenuItem({
			label: 'Rename',
			click: () => {
				this.component.sendCommand('Focus')
				this.component.sendCommand('StartRename')
			}
		})

		let deleteItem = new MenuItem({
			label: 'Delete',
			click: () => {
				this.component.sendCommand('Focus')
				this.component.sendCommand('StartDelete')
			}
		})

		menu.append(renameItem)
		menu.append(deleteItem)

		this.element.addEventListener('contextmenu', (e) => {
			e.preventDefault()
			menu.popup(remote.getCurrentWindow())
		})
	}

	initialize() {
		this.element.classList.add('icon', 'inset', 'stock')

		let portfolio = this.model.get('portfolio')

		this.nameLabel  = new Label({ classes: 'name' })
		this.valueLabel = new Label({ classes: 'value' })
		this.nameInput  = new Input({ classes: ['edit-name', 'hidden'] })

		this.component.on('deactivate', () => {
			this.component.sendCommand('UpdatePortfolio', { name: this.nameInput.get('text') })
		})

		this.element.addEventListener('click', () => {
			if (this.model.get('isActive')) {
				this.component.sendCommand('StartRename')
			} else {
				this.component.sendCommand('Activate')
			}

			this.component.invalidate()
		})

		this.nameInput.on('keyUp', (e, originalEvent) => {
			if (originalEvent.key === 'Enter') {
				this.sendCommand('FinishRename')
			}

			if (originalEvent.key === 'Escape') {
				this.sendCommand('CancelRename')
			}
		})

		this._buildContextMenu()

		this.components.addRange([
			this.nameLabel,
			this.valueLabel,
			this.nameInput,
		])

		this.render()
	}

	render() {
		let portfolio = this.model.get('portfolio')

		let value = Portfolio.getValue(portfolio)

		if (this.model.get('isActive')) {
			this.element.classList.add('active')
		} else {
			this.element.classList.remove('active')
			this.nameLabel.view.element.classList.remove('hidden')
			this.nameInput.view.element.classList.add('hidden')
		}

		this.nameLabel.setMany({ text: portfolio.name }).invalidate()
		this.valueLabel.setMany({
			text: `${value} ${helpers.getCurrencySymbol(portfolio.currency)}`
		}).invalidate()
		this.nameInput.setMany({ text: portfolio.name }).invalidate()

		super.render()
		return this
	}
}
