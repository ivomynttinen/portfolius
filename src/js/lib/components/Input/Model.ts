import * as knife from '../../vendor/knife/knife'

export default class InputModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			text: options.text || '',
			placeholder: options.placeholder || '',
		})
	}
}
