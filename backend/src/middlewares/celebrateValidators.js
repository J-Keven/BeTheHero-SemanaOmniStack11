const { celebrate, Joi, Segments } = require('celebrate')

module.exports = {
	createOng: celebrate({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required(),
			email: Joi.string().required().email(),
			whatsapp: Joi.number().required(),
			city: Joi.string().required(),
			uf: Joi.string().required().length(2)
		})
	}),
	reloadIncidents:celebrate({
		[Segments.QUERY]: Joi.object().keys({
			page: Joi.number()
		})
	}),
	profile: celebrate({
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	}),

	createIncidents: celebrate({
		[Segments.BODY]: Joi.object().keys({
			title: Joi.string().required(),
			description: Joi.string().required(),
			value: Joi.number().required(),
		}),
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	}),

	deleteIncidents: celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			id: Joi.number().required()
		}),
		[Segments.HEADERS]: Joi.object({
			authorization: Joi.string().required()
		}).unknown()
	}),
}