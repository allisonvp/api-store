const { Router } = require('express');
const router = Router();
const { getCategories } = require('../controllers/categories.controller');

//The controller will be called in the /api/categories/ endpoint.
router.get('/', getCategories);

module.exports = router;
