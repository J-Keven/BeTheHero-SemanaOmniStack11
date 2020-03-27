const crypto = require('crypto')

module.exports =  () => {
	return crypto.randomBytes(4).toString("HEX")
}