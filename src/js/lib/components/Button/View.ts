'use strict';

import * as knife from '../../vendor/knife/knife'
import Label from '../Label/Component'

export default class ButtonView extends knife.View {
	element:HTMLSpanElement
	label:Label

	getComponentName() {
		return 'Button'
	}

	initialize(options) {
		this.label = new Label({ text: options.text });

		this.element.addEventListener('click', () => {
			this.component.sendCommand('Click')
		})

		this.components.add(this.label)
	}

	render() {
		this.label.set('text', this.model.get('text'))

		super.render()
		return this
	}
}
