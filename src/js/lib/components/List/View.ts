import * as knife from '../../vendor/knife/knife'

export default class ListView extends knife.View {
	getComponentName() {
		return 'List'
	}

	_createElement() {
		return document.createElement('ul')
	}

	initialize(options) {

	}

	render() {
		super.render()

		return this
	}
}
