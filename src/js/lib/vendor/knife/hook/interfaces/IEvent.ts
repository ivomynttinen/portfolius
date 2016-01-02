export interface IEvent {
	eventName:string
	isDefaultPrevented:boolean
	isCancelled:boolean
	isPropagationStopped:boolean
	data:any[]
	preventDefault():void
	cancel():void
	stopPropagation():void
	hasNamespaces():boolean
	getNamespaces():string[]
	hasEventName():boolean
	getEventName():string
}
