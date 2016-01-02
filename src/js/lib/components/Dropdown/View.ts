'use strict';

import * as knife from '../../vendor/knife/knife'

export default class DropdownView extends knife.View {
	element:HTMLSpanElement

	getComponentName() {
		return 'Dropdown'
	}

	_createElement() {
		return document.createElement('select')
	}

	initialize(options) {

	}

	render() {
		super.render()

		return this
	}
}
