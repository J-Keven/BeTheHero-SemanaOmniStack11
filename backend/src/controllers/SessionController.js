const jwt = require('jsonwebtoken')

const connection = require('../database/connection')
const tokenConfigs = require('../config/TokenConfig')

class LoginContrller {
	async login(req, res) {
		const { email, password } = req.body

		console.log(password)
		const ongExist = await connection('ongs')
			.where({ email })
			.select(['id', 'name', 'email', 'password'])
			.first()

		if (!ongExist) {
			return res.status(404).json({ Error: "Ong not found" })
		}

		if (ongExist.password !== password) {
			return res.status(401).json({ Error: 'Password incorrect' })
		}

		const token = await jwt.sign({ id: ongExist.id }, tokenConfigs.secretKey, tokenConfigs.configs)
		ongExist.token = token

		res.json(ongExist)
	}

}

module.exports = new LoginContrller();