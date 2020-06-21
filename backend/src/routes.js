const express = require('express');

const routes = express();


const ProductController = require('./controllers/ProductController');


routes.post('/newProduct', ProductController.newProduct);

module.exports = routes;