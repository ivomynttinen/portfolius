/// <reference path="../../typings/tsd.d.ts" />

let Datastore = require('nedb')

import * as knife from './lib/vendor/knife/knife'
import App from './lib/App/Component'

let db = {
	stocks:          new Datastore({ filename: 'db/stocks',          autoload: true }),
	stockValuations: new Datastore({ filename: 'db/stockValuations', autoload: true }),
	transactions:    new Datastore({ filename: 'db/transactions',    autoload: true }),
	portfolios:      new Datastore({ filename: 'db/portfolios',      autoload: true }),
}

let app = new App()

console.log(app)

;(window as any).app = app
;(window as any).knife = knife

document.body.appendChild(app.view.element)

//(app.view as any).html.appendTo('body')
