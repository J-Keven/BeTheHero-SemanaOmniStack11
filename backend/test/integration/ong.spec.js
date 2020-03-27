const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('Ong', () =>{
	beforeEach( async () => {
		await connection.migrate.latest();
	})

	afterAll( async () => {
		await connection.destroy()
	})
	it('shouln be able to create a new ONG', async () => {
		const response = await request(app).post('/ongs').send({
			name: "APAD",
			email: "apad@gmail.com",
			whatsapp: 89988121738,
			city: "Picos",
			uf: "PI"
		})

		expect(response.body).toHaveProperty('id')
		expect(response.body.id).toHaveLength(8)
	})
})