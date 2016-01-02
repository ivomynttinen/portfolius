import * as knife from '../../vendor/knife/knife'
import Label from '../Label/Component'

export default class ButtonView extends knife.View {
	element:HTMLSpanElement
	label:Label

	getComponentName() {
		return 'Button'
	}

	_createElement() {
		return document.createElement('button')
	}

	initialize(options) {
		this.element.addEventListener('click', () => {
			this.component.sendCommand('Click')
		})
	}

	render() {
		this.element.textContent = this.model.get('text')

		super.render()
		return this
	}
}
