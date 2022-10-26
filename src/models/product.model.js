const connection = require('../database');

//The Product model accesses the database to retrieve data.
class Product {
  constructor() {
    //All queries come from the table 'product'.
    this.table = 'product';
  }

  //Get products from the database
  async getProducts({ search, ordering, category }) {
    //Use knex to build a query with optional query parameters that will be added to the query builder only if the user applies filters by category, ordering or searching.
    const result = await connection
      .from(this.table)
      .select('*')
      .modify(function (queryBuilder) {
        if (category) queryBuilder.where('category', category);
        if (ordering) queryBuilder.orderBy('name', ordering);
        if (search) queryBuilder.whereILike('name', `%${search}%`);
      });
    return result;
  }
}

module.exports = Product;
