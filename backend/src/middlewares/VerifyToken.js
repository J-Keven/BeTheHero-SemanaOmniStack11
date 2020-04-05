const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const configsToken = require('../config/TokenConfig')
const connection = require('../database/connection')

module.exports = async (req, res, next) => {
	const token = req.headers.authorization

	if (!token) {
		return res.status(401).json({ error: 'Required token' })
	}

	// const [ , token ]= authorization.split(' ')
	// console.log(token)
	try {
		const decoded = await promisify(jwt.verify)(token, configsToken.secretKey, configsToken.configs)
		const ongExist = await connection('ongs').select('id').where('id', decoded.id).first()
		if (!ongExist) {
			return res.status(401).json({ error: 'Invalid token' })
		}

		req.ongId = decoded.id

	} catch (error) {
		return res.status(401).json({ error: 'Invalid token' })
	}

	return next()
}