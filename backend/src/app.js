const express = require('express')
const Routes = require('./routes')
const cors = require('cors')
const logMiddleware = require('./middlewares/LogMiddlreware')

class App {
	constructor() {
		this.server = express()
		this.middleware()
		this.routes()
	}

	middleware() {
		this.server.use(cors())
		this.server.use(express.json())
		this.server.use(logMiddleware)
	}
	routes() {
		this.server.use(Routes)
	}
}

module.exports = new App().server;