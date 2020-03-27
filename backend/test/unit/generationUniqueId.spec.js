const generationUniqueId = require('../../src/utils/generationUniqueId')


describe('Generation Unique ID', () => {
	it('Should generation unique id', ()=> {
		const id = generationUniqueId()
		expect(id).toHaveLength(8)
	});
});