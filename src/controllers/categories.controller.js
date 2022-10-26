const Category = require('../models/category.model');

//Instance of the Category class
const category = new Category();

//The controller calls the methods of the Category model.
const getCategories = async (req, res) => {
  try {
    //The getCategories method is called from the Category model and the result is stored in the variable categories.
    const categories = await category.getCategories();
    //If the response is ok, the status code will be 200 and the response body will be the list of categories.
    res.status(200).send(categories);
  } catch (error) {
    //If the response is wrong, the status code will be 500 and the response body will be the error message.
    res.status(500).send({ messages: error.message });
  }
};

module.exports = { getCategories };
