import * as knife from '../../vendor/knife/knife'

export default class HeaderView extends knife.View {
	getComponentName() {
		return 'Header'
	}

	initialize(options) {
		this.element.classList.add('toolbar')
	}
}
