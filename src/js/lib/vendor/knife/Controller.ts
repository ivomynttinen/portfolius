import EventMachine from './EventMachine'
import Component from './Component'

export default class Controller extends EventMachine {
	component:Component

	constructor(options: any = {}, component:Component) {
		super()

		this.component = component

		this.initialize(options)
	}

	initialize(options:any) {

	}
}
