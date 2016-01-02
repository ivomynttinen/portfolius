'use strict';

import * as knife from '../../vendor/knife/knife'

export default class InputView extends knife.View {
	element:HTMLInputElement

	getComponentName() {
		return 'Input'
	}

	_createElement() {
		return document.createElement('input')
	}

	initialize(options) {

	}

	render() {
		super.render()

		return this
	}
}
