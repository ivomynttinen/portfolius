import * as knife from '../../vendor/knife/knife'

import Label from '../Label/Component'
import Button from '../Button/Component'
import Headline from '../Headline/Component'
import List from '../List/Component'
import PortfolioListItem from '../PortfolioListItem/Component'
import Container from '../Container/Component'

import Portfolio from '../../shared/Portfolio'

export default class SidebarView extends knife.View {
	summaryLabel:Label
	portfolioHeadline:Headline
	portfolioList:List
	footer:Container
	refreshButton:Button
	addButton:Button

	getComponentName() {
		return 'Sidebar'
	}

	_buildFooter() {
		this.footer = new Container({ classes: 'footer' })

		this.refreshButton = new Button({ classes: 'refresh' })
		this.addButton = new Button({ classes: 'add' })

		this.footer.children.addRange([
			this.refreshButton,
			this.addButton,
		])
	}

	initialize(options) {
		this.element.classList.add('sidebar')

		this.summaryLabel = new Label({ text: 'Summary', classes: ['summary', 'hidden'] })

		this.portfolioHeadline = new Headline({ level: 4, text: 'Portfolios' })

		this.portfolioList = new List({})

		this._buildFooter()

		this.components.addRange([
			this.summaryLabel,
			this.portfolioHeadline,
			this.portfolioList,
			this.footer,
		])
	}

	render() {
		addLoop:
		for (let portfolio of this.model.get('portfolios')) {
			for (let listItem of this.portfolioList.children) {
				if (listItem.get('portfolio')._id === portfolio._id) {
					continue addLoop
				}
			}

			let portfolioListItem = new PortfolioListItem({ portfolio })
			let getDifferentListViewItems = () => {
				let items = []
				for (let listItem of this.portfolioList.children) {
					if (listItem.get('portfolio')._id !== portfolioListItem.get('portfolio')._id) {
						items.push(listItem)
					}
				}

				return items
			}

			portfolioListItem.on('activate', () => {
				for (let listItem of getDifferentListViewItems()) {
					listItem.sendCommand('Defocus')
					listItem.sendCommand('FinishRename')
					listItem.sendCommand('Deactivate')
					listItem.invalidate()
				}
			})

			portfolioListItem.on('startRename', () => {
				for (let listItem of getDifferentListViewItems()) {
					listItem.sendCommand('Defocus')
					listItem.sendCommand('FinishRename')
				}
			})

			portfolioListItem.on('startDelete', () => {
				for (let listItem of getDifferentListViewItems()) {
					listItem.sendCommand('Defocus')
					listItem.sendCommand('FinishRename')
				}
			})

			portfolioListItem.on('deletedPortfolio', () => {
				portfolioListItem.dispose()

				this.trigger('removedPortfolio')
				if (this.portfolioList.children.count === 0) {
					this.trigger('removedLastPortfolio')
				}
			})

			this.portfolioList.children.add(portfolioListItem)
		}

		super.render()
		return this
	}
}
