/// <reference path="../../../../typings/tsd.d.ts" />

import * as knife from '../vendor/knife/knife'

interface IStockData {
	_id:string
	name:string
	isin?:string
	wkn?:string
	symbol:string
	type?:string
	sector?:string
}

export default class Stock extends knife.EventMachine {
	data:IStockData

	static find(...args) {
		let stocks = (window as any).db.stocks
		stocks.find(...args)
	}

	static findOne(...args) {
		let stocks = (window as any).db.stocks
		stocks.findOne(...args)
	}

	static insert(...args) {
		let stocks = (window as any).db.stocks
		stocks.insert(...args)
	}

	static update(...args) {
		let stocks = (window as any).db.stocks
		stocks.update(...args)
	}

	static remove(...args) {
		let stocks = (window as any).db.stocks
		stocks.remove(...args)
	}

	static count(...args) {
		let stocks = (window as any).db.stocks
		stocks.count(...args)
	}

	constructor(data:IStockData) {
		super()

		this.data = data
	}
}
