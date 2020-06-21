const crypto = require('crypto');

module.exports = {
    async newProduct(require, response) {
        const id = crypto.randomBytes(4).toString('HEX');

        return response.json({ id });
    }
}