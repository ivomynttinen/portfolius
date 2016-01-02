'use strict';

import * as knife from '../../vendor/knife/knife'

export default class HeaderView extends knife.View {
	element:HTMLSpanElement

	getComponentName() {
		return 'Header'
	}

	_createElement() {
		return document.createElement('div')
	}

	initialize(options) {
		this.element.classList.add('toolbar')
	}
}
