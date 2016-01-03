import * as knife from '../../vendor/knife/knife'

export default class PortfolioListItemModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			portfolio: options.portfolio || {},
			isActive: false,
		})
	}
}
