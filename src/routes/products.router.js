const { Router } = require('express');
const router = Router();
const { getProducts } = require('../controllers/products.controller');

router.get('/', async (req, res) => {
  try {
    const products = await getProducts(req.query);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ messages: error.message });
  }
});

module.exports = router;
