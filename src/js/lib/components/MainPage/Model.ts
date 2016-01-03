import * as knife from '../../vendor/knife/knife'

export default class MainPageModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			portfolios: options.portfolios
		})
	}
}
