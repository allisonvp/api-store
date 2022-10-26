const Product = require('../models/product.model');

//Instance of the Product class
const product = new Product();

//The controller calls the methods of the Product model.
const getProducts = async (req, res) => {
  try {
    //The getProducts method is called from the Product model and the result is stored in the variable products.
    //The getProducts method has the query parameters as an argument.
    const products = await product.getProducts(req.query);
    //If the response is ok, the status code will be 200 and the response body will be the list of products.
    res.status(200).send(products);
  } catch (error) {
    //If the response is wrong, the status code will be 500 and the response body will be the error message.
    res.status(500).send({ messages: error.message });
  }
};

module.exports = { getProducts };
