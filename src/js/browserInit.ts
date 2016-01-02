/// <reference path="../../typings/tsd.d.ts" />

let Datastore = require('nedb')

import * as knife from './lib/vendor/knife/knife'
import App from './lib/App/Component'

interface IDB {
	stocks: NeDB.NeDBDataStore
	stockValuations:NeDB.NeDBDataStore
	transactions:NeDB.NeDBDataStore
	portfolios:NeDB.NeDBDataStore
}

let db:IDB = {
	stocks:          new Datastore({ filename: 'db/stocks',          autoload: true }),
	stockValuations: new Datastore({ filename: 'db/stockValuations', autoload: true }),
	transactions:    new Datastore({ filename: 'db/transactions',    autoload: true }),
	portfolios:      new Datastore({ filename: 'db/portfolios',      autoload: true }),
}

// TODO: Handle Unexpected Errors via window.onerror
;(window as any).db = db

let app = new App()
document.body.appendChild(app.view.element)
