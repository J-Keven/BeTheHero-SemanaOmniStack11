const connection = require('../database/connection')

class ProfileController{
	async index(req, res) {
		const ong_id = req.headers.authorization
		if(!ong_id){
			return res.status(400).json({error: "Ong required"})
		}
		
		const incidents = await connection('incidents')
			.where({ ong_id })
			.select('*')

		return res.json(incidents)
	}
}

module.exports = new ProfileController();