import * as knife from '../../vendor/knife/knife'

import WelcomePageModel      from './Model'
import WelcomePageView       from './View'
import WelcomePageController from './Controller'

import Portfolio from '../../shared/Portfolio'

export default class WelcomePage extends knife.Component {
	_getCommandHandlers() {
		return {
			CreatePortfolio: '_createPortfolio'
		}
	}

	initialize(options) {
		this.model      = new WelcomePageModel({}, this)
		this.view       = new WelcomePageView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new WelcomePageController({}, this)
	}

	_createPortfolio(e, data) {
		Portfolio.insert(data, (err, portfolio) => {
			if (err) {
				throw err
			}

			this.trigger('createdFirstPortfolio', portfolio)
		})
	}
}
