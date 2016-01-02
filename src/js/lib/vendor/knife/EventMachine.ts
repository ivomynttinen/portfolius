'use strict';

import * as hook from './hook/hook'

export default class EventMachine {
	parent:EventMachine
	_handle:hook.Handle

	static _checkEvent(event:string | hook.IEvent):hook.Event {
		let eventObj:hook.Event
		if (typeof event === "string") {
			eventObj = new hook.Event({
				eventName: event
			})
		} else if (!(event instanceof hook.Event)) {
			eventObj = new hook.Event(event)
		} else {
			eventObj = event
		}

		return eventObj
	}

	_getCommandHandlers() {
		return {}
	}

	constructor(options:any = {}) {
		this._handle = new hook.Handle()

		let commandHandlers = this._getCommandHandlers()
		for (let command in commandHandlers) {
			this.onCommand(command, this[commandHandlers[command]])
		}
	}

	trigger(event: string | hook.IEvent, data?):EventMachine {
		let eventObj = EventMachine._checkEvent(event)
		this._handle.triggerHandlers(this, eventObj, data)

		if (this.parent != null && !eventObj.isPropagationStopped) {
			this.parent.trigger(eventObj, data)
		}

		return this
	}

	on(event, handler:(event:hook.IEvent, ...args: any[]) => void):EventMachine {
		let key, value

		if (typeof event === "object" && event.eventName == null) {
			for (key in event) {
				value = event[key]
				this.on(key, value)
			}

			return this
		}

		event = EventMachine._checkEvent(event)
		this._handle.addHandler(event, handler)

		return this
	}

	off(event?: string | hook.IEvent, handler?:Function):EventMachine {
		let eventObj = EventMachine._checkEvent(event)
		this._handle.removeHandler(eventObj, handler)

		return this
	}

	sendCommand(event:string | hook.IEvent, data?):EventMachine {
		//TODO: Output to console whenever an event gets triggered with no listeners
		let eventObj = EventMachine._checkEvent(event)
		eventObj.eventName = 'command.' + eventObj.eventName
		this.trigger(eventObj, data)
		return this
	}

	onCommand(event, handler:(event:hook.IEvent, ...args: any[]) => void):EventMachine {
		let key, value

		if (typeof event === 'object' && event.eventName == null) {
			for (key in event) {
				value = event[key]
				this.onCommand(key, value)
			}

			return this
		}

		let eventObj = EventMachine._checkEvent(event)
		eventObj.eventName = 'command.' + eventObj.eventName
		this._handle.addHandler(eventObj, handler)

		return this
	}

	offCommand(event: string | hook.IEvent, handler):EventMachine {
		let eventObj = EventMachine._checkEvent(event)
		eventObj.eventName = 'command.' + eventObj.eventName
		this._handle.removeHandler(eventObj, handler)

		return this
	}

	provideHook(eventName:string, defaultHandler, data?):EventMachine {
		let afterEvent, beforeEvent, capitalizedEventName, event

		if (data == null) {
			data = []
		}

		capitalizedEventName = eventName[0].toUpperCase() + eventName.slice(1)
		beforeEvent = new hook.Event({
			eventName: "before" + capitalizedEventName
		})

		this.trigger(beforeEvent, data)

		event = (Object as any).assign({}, beforeEvent)
		event.eventName = eventName

		if (!(event.isCancelled || event.isDefaultPrevented)) {
			defaultHandler.call.apply(defaultHandler, [this, event].concat(event.data))
		}

		// event might have been changed by defaultHandler
		if (!event.isCancelled) {
			this.trigger(event, event.data)
		}

		// event might have been changed by handlers
		if (!event.isCancelled) {
			afterEvent = (Object as any).assign({}, event)
			afterEvent.eventName = "after" + capitalizedEventName
			this.trigger(afterEvent, afterEvent.data)
		}

		return this
	}
}
