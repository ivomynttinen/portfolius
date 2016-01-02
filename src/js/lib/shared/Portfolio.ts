import * as knife from '../vendor/knife/knife'

import Stock from './Stock'
import Transaction from './Transaction'

interface IPortfolioData {
	_id:string
	name:string
	currency:string
	stockList:Array<Stock>
	transactionList:Array<Transaction>
}

export default class Portfolio extends knife.EventMachine {
	data:IPortfolioData

	static find(...args) {
		let portfolios = (window as any).db.portfolios
		portfolios.find(...args)
	}

	static findOne(...args) {
		let portfolios = (window as any).db.portfolios
		portfolios.findOne(...args)
	}

	static insert(...args) {
		let portfolios = (window as any).db.portfolios
		portfolios.insert(...args)
	}

	static update(...args) {
		let portfolios = (window as any).db.portfolios
		portfolios.update(...args)
	}

	static remove(...args) {
		let portfolios = (window as any).db.portfolios
		portfolios.remove(...args)
	}

	static count(...args) {
		let portfolios = (window as any).db.portfolios
		portfolios.count(...args)
	}

	constructor(data:IPortfolioData) {
		super()

		this.data = data
	}
}
