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
		this.element.addEventListener('input', (e) => {
			this.model.set('text', this.element.value)
			this.component.sendCommand('Input', e)
		})
		})
		// TODO: Implement placeholder
	}

	render() {
		super.render()

		this.element.placeholder = this.model.get('placeholder')
		this.element.value = this.model.get('text')

		return this
	}
}
