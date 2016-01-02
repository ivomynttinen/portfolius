import { IEvent } from './interfaces/IEvent'
import { IEventOptions } from './interfaces/IEventOptions'

export class Event implements IEvent, IEventOptions {
	eventName:string
	isDefaultPrevented:boolean
	isCancelled:boolean
	isPropagationStopped:boolean
	data:any[]

	constructor(options:IEventOptions = {}) {
		this.eventName            = options.eventName || ""
		this.isDefaultPrevented   = options.isDefaultPrevented || false
		this.isCancelled          = options.isCancelled || false
		this.isPropagationStopped = options.isPropagationStopped || false
	}

	preventDefault():void {
		this.isDefaultPrevented = true
	}

	cancel():void {
		this.isCancelled = true
	}

	stopPropagation():void {
		this.isPropagationStopped = true
	}

	hasNamespaces():boolean {
		return !!~this.eventName.indexOf(".")
	}

	getNamespaces():string[] {
		let events = this.eventName.split(" ")
		let results = []
		let event, namespaces

		for (let i = 0; i < events.length; i++) {
			event = events[i]
			namespaces = event.split(".")
			namespaces.shift() // remove the eventName
			results = results.concat(namespaces)
		}

		return results
	}

	hasEventName():boolean {
		return this.getEventName() === ""
	}

	getEventName():string {
		return this.eventName.split(".")[0]
	}
}
