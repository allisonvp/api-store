const connection = require('../database');

//The Category model accesses the database to retrieve data.
class Category {
  constructor() {
    //All queries come from the table 'category'.
    this.table = 'category';
  }

  //Get categories from the database
  async getCategories() {
    //Use knex to build a simple query to get all the categories
    const result = await connection.select('*').from(this.table);
    return result;
  }
}

module.exports = Category;
