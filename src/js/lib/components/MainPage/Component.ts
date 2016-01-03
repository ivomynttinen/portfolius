import * as knife from '../../vendor/knife/knife'

import MainPageModel      from './Model'
import MainPageView       from './View'
import MainPageController from './Controller'

import Portfolio from '../../shared/Portfolio'

export default class MainPage extends knife.Component {
	_getCommandHandlers() {
		return {

		}
	}

	initialize(options) {
		this.model      = new MainPageModel({}, this)
		this.view       = new MainPageView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new MainPageController({}, this)

		Portfolio.find({}, (err, portfolios) => {
			if (err != null) {
				throw err
			}

			this.model.set('portfolios', portfolios)
		})
	}
}
