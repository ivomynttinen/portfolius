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
		this.element.addEventListener('input', () => {
			this.model.set('text', this.element.value)
			this.component.sendCommand('Input')
		})
		// TODO: Implement placeholder
	}

	render() {
		super.render()

		return this
	}
}
