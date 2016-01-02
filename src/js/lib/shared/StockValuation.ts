import * as knife from '../vendor/knife/knife'

interface IStockValuationData {
	_id:string
	stockID:string
	date:number
	value:number
}

export default class StockValuation extends knife.EventMachine {
	data:IStockValuationData

	static find(...args) {
		let stockValuations = (window as any).db.stockValuations
		stockValuations.find(...args)
	}

	static findOne(...args) {
		let stockValuations = (window as any).db.stockValuations
		stockValuations.findOne(...args)
	}

	static insert(...args) {
		let stockValuations = (window as any).db.stockValuations
		stockValuations.insert(...args)
	}

	static update(...args) {
		let stockValuations = (window as any).db.stockValuations
		stockValuations.update(...args)
	}

	static remove(...args) {
		let stockValuations = (window as any).db.stockValuations
		stockValuations.remove(...args)
	}

	static count(...args) {
		let stockValuations = (window as any).db.stockValuations
		stockValuations.count(...args)
	}

	constructor(data:IStockValuationData) {
		super()

		this.data = data
	}
}
