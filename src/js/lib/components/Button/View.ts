import * as knife from '../../vendor/knife/knife'
import Label from '../Label/Component'

export default class ButtonView extends knife.View {
	label:Label

	getComponentName() {
		return 'Button'
	}

	_createElement() {
		return document.createElement('button')
	}

	initialize(options) {
		this.element.addEventListener('click', () => {
			if (this.model.get('isEnabled')) {
				this.component.sendCommand('Click')
			}
		})
	}

	render() {
		this.element.textContent = this.model.get('text')

		if (this.model.get('isEnabled')) {
			this.element.classList.remove('disabled')
		} else {
			this.element.classList.add('disabled')
		}

		super.render()
		return this
	}
}
