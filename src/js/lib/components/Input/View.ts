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
		// TODO: Implement placeholder
	}

	render() {
		super.render()

		return this
	}
}
