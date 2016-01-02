'use strict';

import EventMachine from './EventMachine'
import Model from './Model'
import View from './View'
import Controller from './Controller'
import Component from './Component'
import Collection from './Collection'

let pubSubMachine = new EventMachine()

let publish = pubSubMachine.trigger.bind(pubSubMachine)
let subscribe = pubSubMachine.on.bind(pubSubMachine)

export {
	publish,
	subscribe,
	EventMachine,
	Model,
	View,
	Controller,
	Component,
	Collection,
}
