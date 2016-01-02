import * as knife from '../../vendor/knife/knife'

export default class ButtonModel extends knife.Model {
	_setDefaultData(options) {
		if (options.isEnabled == null) {
			options.isEnabled = true
		}
		
		this.setMany({
			text: options.text || '',
			isEnabled: options.isEnabled,
		})
	}
}
