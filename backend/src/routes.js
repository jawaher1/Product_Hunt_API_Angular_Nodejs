const express = require('express');
const request = require('request')
var http = require('http');

const routes = express.Router();



const ProductController = require('./controllers/ProductController');

routes.get('/allproducts', ProductController.fetchall)

module.exports = routes;
