const express = require('express');

const routes = express();


const ProductController = require('./controllers/ProductController');


routes.get('/products', ProductController.index);
routes.post('/products/new', ProductController.newProduct);
routes.post('/products/info', ProductController.productInfo);
routes.get('/products/bestSellers', ProductController.bestSellers);

module.exports = routes;