import * as knife from '../vendor/knife/knife'

interface ITransactionData {
	_id:string
	stockID:string
	date:number
	type:string
	prize:number
	amount:number
	comment:string
	fee:number
}

export default class Transaction extends knife.EventMachine {
	data:ITransactionData

	static find(...args) {
		let transactions = (window as any).db.transactions
		transactions.find(...args)
	}

	static findOne(...args) {
		let transactions = (window as any).db.transactions
		transactions.findOne(...args)
	}

	static insert(...args) {
		let transactions = (window as any).db.transactions
		transactions.insert(...args)
	}

	static update(...args) {
		let transactions = (window as any).db.transactions
		transactions.update(...args)
	}

	static remove(...args) {
		let transactions = (window as any).db.transactions
		transactions.remove(...args)
	}

	static count(...args) {
		let transactions = (window as any).db.transactions
		transactions.count(...args)
	}

	constructor(data:ITransactionData) {
		super()

		this.data = data
	}
}
