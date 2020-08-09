const connection = require('../database/connection');

module.exports = {
    async newImage(request, response) {
        const product_id = request.body.id;
        const { originalname: name, size, key } = request.file;

        const url = `http://dragondjx.tk/files/${key}`

        await connection('images').insert({
            name,
            size,
            key,
            url,

            product_id
        });

        return response.json({  })
    },

    async firstImage(request, response) {
        const { id: product_id } = request.body;

        const image = await connection('images')
            .where('product_id', product_id)
            .first()
            .select('*');

        return response.json(image);
    },

    async allImages(request, response) {
        const { id: product_id } = request.body;

        const images = await connection('images')
            .where('product_id', product_id)
            .select('*');

        return response.json(images);
    }
};