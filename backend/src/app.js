const express = require('express')
const Routes = require('./routes')
const cors = require('cors')
const logMiddleware = require('./middlewares/LogMiddlreware')
const { errors } = require('celebrate')
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
		this.server.use(errors())
	}
}

module.exports = new App().server;