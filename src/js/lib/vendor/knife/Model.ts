'use strict';

import { IEvent } from './hook/hook'
import EventMachine from './EventMachine'
import Component from './Component'

export default class Model extends EventMachine {
	_data:any
	component:Component

	constructor(options:any = {}, component:Component) {
		super()

		this.component = component

		this._data = {}
		this._setDefaultData(options)
		this.initialize(options)
	}

	initialize(options:any) {

	}

	_setDefaultData(options) {

	}

	setMany(object:any) {
		for (let key in object) {
			this.set(key, object[key])
		}
	}

	_setDefault(e:IEvent, key:string, value:any) {
		this._data[key] = value
	}

	set(key:string, value:any):Model {
		this.provideHook("set", this._setDefault, [key, value])
		return this
	}

	get(key:string):any {
		return this._data[key]
	}
}
