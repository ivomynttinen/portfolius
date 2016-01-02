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

		this.select.addEventListener('change', () => {
			let option = this.component.children.get(this.select.selectedIndex)
			this.model.set('selectedOption', option)
		})
	}

	render() {
		super.render()

		return this
	}
}
