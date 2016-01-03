import * as knife from '../../vendor/knife/knife'

import PortfolioListItemModel      from './Model'
import PortfolioListItemView       from './View'
import PortfolioListItemController from './Controller'

import ListItem from '../ListItem/Component'

export default class PortfolioListItem extends ListItem {
	_getCommandHandlers() {
		return {
			Focus:           '_focus',
			Defocus:         '_defocus',
			Activate:        '_activate',
			Deactivate:      '_deactivate',
			UpdatePortfolio: '_updatePortfolio',
			DeletePortfolio: '_deletePortfolio',
			StartRename:     '_startRename',
			CancelRename:    '_cancelRename',
			FinishRename:    '_finishRename',
			StartDelete:     '_startDelete',
		}
	}

	initialize(options) {
		this.model      = new PortfolioListItemModel({ portfolio: options.portfolio }, this)
		this.view       = new PortfolioListItemView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new PortfolioListItemController({}, this)

		window.document.addEventListener('click', () => {
			this.sendCommand('Defocus')
			this.sendCommand('StopRename')
		})
	}

	_updatePortfolio(e) {
		let portfolio = this.model.get('portfolio')
		Object.assign(portfolio, e.data)
		
		;(window as any).db.portfolios.update({ _id: portfolio._id }, portfolio, (err) => {
			if (err != null) {
				throw err
			}

			this.model.set('portfolio', portfolio)
			this.invalidate()
			this.trigger('updatedPortfolio')
		})
	}

	_deletePortfolio(e) {
		let portfolio = this.model.get('portfolio')
		;(window as any).db.portfolios.remove({ _id: portfolio._id }, (err) => {
			if (err != null) {
				throw err
			}

			this.trigger('deletedPortfolio')
		})
	}

	_focus(e) {
		this.view.sendCommand('Focus')
		this.trigger('focus')
	}

	_defocus(e) {
		this.view.sendCommand('Defocus')
		this.trigger('defocus')
	}

	_activate(e) {
		this.model.set('isActive', true)
		this.trigger('activate')
	}

	_deactivate(e) {
		this.sendCommand('Defocus')
		this.model.set('isActive', false)
		this.trigger('deactivate')
	}

	_startRename(e) {
		this.view.sendCommand('StartRename')
		this.trigger('startRename')
	}

	_cancelRename(e) {
		this.view.sendCommand('CancelRename')
		this.trigger('cancelRename')
		this.trigger('stopRename')
	}

	_finishRename(e) {
		this.view.sendCommand('FinishRename')
		this.trigger('finishRename')
		this.trigger('stopRename')
	}

	_startDelete(e) {
		this.view.sendCommand('StartDelete')
		this.trigger('startDelete')
	}
}
