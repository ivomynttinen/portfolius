import * as knife from '../../vendor/knife/knife'

export default class DropdownView extends knife.View {
	select: HTMLSelectElement

	getComponentName() {
		return 'Dropdown'
	}

	_createChildContainer() {
		this.select = document.createElement('select')
		return this.select
	}

	initialize(options) {
		this.element.appendChild(this.select)
	}

	render() {
		super.render()

		return this
	}
}
