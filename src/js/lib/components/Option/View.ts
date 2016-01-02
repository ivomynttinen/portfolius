import * as knife from '../../vendor/knife/knife'

export default class LabelView extends knife.View {

	getComponentName() {
		return 'Option'
	}

	_createElement() {
		return document.createElement('option')
	}

	initialize(options) {

	}

	render() {
		super.render()

		this.element.innerText = this.model.get('text')

		return this
	}
}
