const { Router } = require('express');
const router = Router();
const { getProducts } = require('../controllers/products.controller');

//The controller will be called in the /api/products/ endpoint.
router.get('/', getProducts);

module.exports = router;
