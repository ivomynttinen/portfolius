import * as knife from '../../vendor/knife/knife'

import SidebarModel      from './Model'
import SidebarView       from './View'
import SidebarController from './Controller'

export default class Sidebar extends knife.Component {
	initialize(options) {
		this.model      = new SidebarModel({ portfolios: options.portfolios }, this)
		this.view       = new SidebarView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new SidebarController({}, this)

		this.view.on('removedPortfolio', () => {
			this.trigger('removedPortfolio')
		})

		this.view.on('removedLastPortfolio', () => {
			this.trigger('removedLastPortfolio')
		})
	}
}
