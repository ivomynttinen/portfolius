import * as knife from '../../vendor/knife/knife'

import HeadlineModel      from './Model'
import HeadlineView       from './View'
import HeadlineController from './Controller'

export default class Headline extends knife.Component {
	initialize(options) {
		this.model      = new HeadlineModel({ text: options.text, level: options.level }, this)
		this.view       = new HeadlineView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new HeadlineController({}, this)
	}
}
