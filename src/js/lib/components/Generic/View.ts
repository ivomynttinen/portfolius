import * as knife from '../../vendor/knife/knife'

export default class GenericView extends knife.View {
	getComponentName() {
		return 'Generic'
	}

	initialize(options) {

	}

	render() {


		super.render()
		return this
	}
}
