import { IEvent } from './interfaces/IEvent'

export class NamespacedHandler {
	namespaces: string[]
	eventName: string
	handler: Function

	constructor(event:IEvent, handler:Function) {
		this.handler    = handler
		this.namespaces = event.getNamespaces()
		this.eventName  = event.getEventName()
	}

	matches(event:IEvent):boolean {
		let eventName = event.getEventName()
		let namespaces, namespace

		if (!(eventName === this.eventName || eventName === "")) {
			return false
		}

		namespaces = event.getNamespaces()

		for (let i = 0; i < namespaces.length; i++) {
			namespace = namespaces[i]

			if (!(~this.namespaces.indexOf(namespace))) {
				return false
			}
		}

		return true
	}
}
