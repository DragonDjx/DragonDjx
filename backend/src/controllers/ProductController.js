const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const products = await connection('products').select('*');

        for (product of products) {
            product.image = await connection('images')
                .where('product_id', product.id)
                .first()
                .select('*');
        }

        return response.json(products);
    },

    async newProduct(request, response) {
        const { title, price, stock, sold } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        const parceled = price / 0.9;

        await connection('products').insert({
            id,
            title,
            price,
            parceled,
            stock,
            sold
        });

        return response.json({ id });
    },

    async productInfo(request, response) {
        const { id } = request.body;

        const product = await connection('products')
        .where('id', id)
        .select('*')
        .first();

        product.images = await connection('images')
        .where('product_id', id)
        .select('*');

        return response.json(product);
    },

    async bestSellers(request, response) {
        const { limit = 4 } = request.query;

        const products = await connection('products')
        .orderBy('sold', 'desc')
        .limit(limit);

        for (product of products) {
            product.image = await connection('images')
                .where('product_id', product.id)
                .first()
                .select('*');
        }

        return response.json(products);
    }
};