import * as knife from '../../vendor/knife/knife'

import DropdownModel      from './Model'
import DropdownView       from './View'
import DropdownController from './Controller'

export default class Dropdown extends knife.Component {
	initialize(options) {
		this.model      = new DropdownModel({}, this)
		this.view       = new DropdownView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new DropdownController({}, this)

		this.children.on('add', (e, child) => {
			if (this.children.count === 1) {
				this.model.set('selectedOption', this.children.get(0))
			}
		})

		this.children.on('remove', () => {
			if (this.children.count === 0) {
				this.model.set('selectedOption', null)
			}
		})
	}
}
