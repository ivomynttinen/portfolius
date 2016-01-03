import * as knife from '../../vendor/knife/knife'

export default class SidebarModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			portfolios: options.portfolios
		})
	}
}
