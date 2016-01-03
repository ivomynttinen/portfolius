import * as knife from '../../vendor/knife/knife'

export default class HeadlineView extends knife.View {
	getComponentName() {
		return 'Headline'
	}

	_createElement() {
		return document.createElement(`h${this.model.get('level')}`)
	}

	initialize(options) {

	}

	render() {
		super.render()

		this.element.innerText = this.model.get('text')

		return this
	}
}
