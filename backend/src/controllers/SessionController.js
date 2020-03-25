const jwt = require('jsonwebtoken')

const connection = require('../database/connection')
const tokenConfigs = require('../config/TokenConfig')

class LoginContrller{
	async login(req, res) {
		const{ id }= req.body

		const ongExist = await connection('ongs')
			.where({ id })
			.select('name', 'email')
			.first()

		if(!ongExist){
			return res.status(404).json({Error: "Ong not found"})
		} 

		const token = await jwt.sign({ id }, tokenConfigs.secretKey, tokenConfigs.configs)
		ongExist.token = token
		
		res.json(ongExist)
	}

}

module.exports = new LoginContrller();