const { Router } = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = Router();

  app.use('/api', router);

  //routes for products:
  router.use('/products', productsRouter); ///api/products

  //routes for categories:
  router.use('/categories', categoriesRouter); ///api/categories
}
module.exports = routerApi;
