import * as knife from '../../vendor/knife/knife'

export default class ListItemView extends knife.View {
	element:HTMLLIElement

	getComponentName() {
		return 'ListItem'
	}

	_createElement() {
		return document.createElement('li')
	}
}
