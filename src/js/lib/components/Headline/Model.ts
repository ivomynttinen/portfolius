import * as knife from '../../vendor/knife/knife'

export default class HeadlineModel extends knife.Model {
	_setDefaultData(options) {
		this.setMany({
			level: options.level || 1,
			text: options.text || '',
		})
	}

	initialize() {
		this.on('beforeSet', (e, key, value) => {
			if (key === 'level') {
				if (this.get('level') != null) {
					console.log('You can not change the level of a headline after initialization.')
					e.cancel()
				}
			}
		})
	}
}
