const { Router } = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
}
module.exports = routerApi;
