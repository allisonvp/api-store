const { Router } = require('express');
const router = Router();
const { getCategories } = require('../controllers/categories.controller');

router.get('/', async (req, res) => {
  try {
    const categories = await getCategories();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({ messages: error.message });
  }
});

module.exports = router;
