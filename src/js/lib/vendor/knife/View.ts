'use strict';

import EventMachine from './EventMachine'
import Component from './Component'
import Model from './Model'
import Collection from './Collection'

export default class View extends EventMachine {
	element:HTMLElement
	childContainer:HTMLElement
	components:Collection<Component>
	component:Component
	model:Model

	constructor(options:any = {}, component:Component) {
		super()

		this.component = component

		this.model = options.model

		this.element = this._createElement()
		this.element.classList.add(this.getComponentName())

		this.childContainer = this.getChildContainer()

		this.components = new Collection<Component>()
		this.components.on('add', (e, component, index) => {
			this.element.appendChild(component.view.element)
		})

		this.initialize(options)

		this.render()
	}

	initialize(options:any):void {

	}

	_createElement():HTMLElement {
		return document.createElement('div')
	}

	getChildContainer():HTMLElement {
		return this.element
	}

	getComponentName():string {
		return 'GenericView'
	}

	hasInvalidComponents():boolean {
		let result = false

		for (let component of this.components.items) {
			if (component.isInvalid) {
				result = true
				break
			}
		}

		return result
	}

	renderComponents():View {
		for (let component of this.components.items) {
			component.render({ force: true })
		}

		return this
	}

	render():View {
		this.renderComponents()

		return this
	}
}
