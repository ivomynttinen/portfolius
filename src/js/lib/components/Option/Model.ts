'use strict';

import * as knife from '../../vendor/knife/knife'

export default class OptionModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			text: options.text || ''
		})
	}
}
