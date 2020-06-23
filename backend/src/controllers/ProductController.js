const crypto = require('crypto');
const connection = require('../database/connection');
const fileSystem = require('fs');

module.exports = {
    async index(request, response) {
        const products = await connection('products').select('*');
    
        return response.json(products);
    },

    async newProduct(request, response) {
        const { title, value, stock, sold, image } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('products').insert({
            id,
            title,
            value,
            stock,
            sold,
            image
        });

        return response.json({ id });
    },

    async productInfo(request, response) {
        const { id } = request.body;

        const info = await connection('products')
        .where('id', id)
        .select('*')
        .first();

        return response.json(info)
    },

    async bestSellers(request, response) {
        const products = await connection('products')
        .orderBy('sold', 'desc')
        .limit(4)

        return response.json(products)
    }
};