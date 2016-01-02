'use strict';

import * as knife from '../../vendor/knife/knife'

import DropdownModel      from './Model'
import DropdownView       from './View'
import DropdownController from './Controller'

export default class Dropdown extends knife.Component {
	initialize(options) {
		this.model      = new DropdownModel({ text: options.text }, this)
		this.view       = new DropdownView({ model: this.model }, this)
		this.controller = new DropdownController({}, this)
	}
}
