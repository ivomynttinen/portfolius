import * as knife from '../../vendor/knife/knife'

export default class LabelView extends knife.View {
	element:HTMLSpanElement

	getComponentName() {
		return 'Label'
	}

	_createElement() {
		return document.createElement('span')
	}

	initialize(options) {

	}

	render() {
		super.render()

		this.element.innerText = this.model.get('text')

		return this
	}
}
