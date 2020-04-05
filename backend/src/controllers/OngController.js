const connection = require('../database/connection')
const generationUniqueId = require('../utils/generationUniqueId')

class OngController {
	async realod(req, res) {
		const ongs = await connection('ongs').select('*')

		res.json(ongs)
	}

	async store(req, res) {
		const {
			name,
			email,
			password,
			whatsapp,
			city,
			uf } = req.body

		const id = generationUniqueId()

		const checkEmail = await connection('ongs')
			.select('email')
			.where('email', email)
			.first()

		if (checkEmail) {
			return res.status(400).json({ error: 'Email existe' })
		}

		await connection('ongs').insert({
			id,
			name,
			password,
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

		res.json({ success: "success" })
	}

}

module.exports = new OngController()