import * as knife from '../../vendor/knife/knife'

import ListItemModel      from './Model'
import ListItemView       from './View'
import ListItemController from './Controller'

export default class ListItem extends knife.Component {
	initialize(options) {
		this.model      = new ListItemModel({}, this)
		this.view       = new ListItemView(Object.assign({}, options, { model: this.model }), this)
		this.controller = new ListItemController({}, this)
	}
}
