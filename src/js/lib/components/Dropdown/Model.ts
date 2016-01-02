import * as knife from '../../vendor/knife/knife'

export default class DropdownModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			selectedOption: options.selectedOption || null
		})
	}
}
