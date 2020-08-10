const express = require('express');
const routerProduct = require('./product');


const router = express.Router();

router
    .use('./product.js', routerProduct)

module.exports = router;