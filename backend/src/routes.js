const { Router } = require('express')
const OngsController = require('./controllers/OngController')
const SessionController = require('./controllers/SessionController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const VerifyTokenMiddleware = require('./middlewares/VerifyToken')

const routes = Router()
// Routes to create Ongs and get information 
routes.get('/ongs', OngsController.realod)
routes.post('/ongs', OngsController.store)
routes.delete('/ongs', VerifyTokenMiddleware ,OngsController.delete)

// Login route
routes.post('/login', SessionController.login)

// Routes to create and delete and get information
routes.get('/incidents', IncidentController.index)

// Middleware to validate the session 
routes.use(VerifyTokenMiddleware)

routes.get('/profile', ProfileController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
