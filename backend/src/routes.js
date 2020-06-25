const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express();


const ProductController = require('./controllers/ProductController');
const ImageController = require('./controllers/ImageController');


routes.get('/products', ProductController.index);
routes.post('/products/new', ProductController.newProduct);
routes.post('/products/info', ProductController.productInfo);
routes.get('/products/bestSellers', ProductController.bestSellers);

routes.post('/images/new', multer(multerConfig).single("file"), ImageController.newImage);
routes.post('/images/first', ImageController.firstImage);
routes.post('/images/all', ImageController.allImages);

module.exports = routes;