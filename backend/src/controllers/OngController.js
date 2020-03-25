const crypto = require('crypto')
const connection = require('../database/connection')

class OngController {
	async realod(req, res) {
		const ongs = await connection('ongs').select('*')
		
		res.json(ongs)
	}

	async store(req, res) {
		const { name,
			email,
			whatsapp,
			city,
			uf } = req.body

		const id = crypto.randomBytes(4).toString("HEX")
		await connection('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city,
			uf
		})
		return res.json({ id }) 
	}

	async delete(req, res) {
		const id = req.ongId
		await connection('ongs').where({ id }).del()

		res.json({success: "success"})
	}

}

module.exports = new OngController()