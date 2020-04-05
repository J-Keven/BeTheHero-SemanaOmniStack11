const { Router } = require('express')

const OngsController = require('./controllers/OngController')
const SessionController = require('./controllers/SessionController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const celebrateValidator = require('./middlewares/celebrateValidators')
const VerifyTokenMiddleware = require('./middlewares/VerifyToken')

const routes = Router()
// Routes to create Ongs and get information 
routes.get('/ongs', OngsController.realod)
routes.post('/ongs', celebrateValidator.createOng, OngsController.store)
routes.delete('/ongs', VerifyTokenMiddleware, OngsController.delete)

// Login route
routes.post('/login',
	celebrateValidator.login,
	SessionController.login
)

// Routes to create and delete and get information
routes.get('/incidents', celebrateValidator.reloadIncidents, IncidentController.index)

// Middleware to validate the session 
// routes.use()

routes.get('/profile',
	celebrateValidator.profile,
	VerifyTokenMiddleware,
	ProfileController.index
)

routes.post('/incidents',
	celebrateValidator.createIncidents,
	VerifyTokenMiddleware,
	IncidentController.create
)

routes.delete('/incidents/:id',
	celebrateValidator.deleteIncidents,
	VerifyTokenMiddleware,
	IncidentController.delete
)

module.exports = routes
