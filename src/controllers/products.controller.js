const getConnection = require('../database');

async function getProducts({ search, ordering, category }) {
  const connection = await getConnection();
  const result = await connection
    .from('product')
    .select('*')
    .modify(function (queryBuilder) {
      if (category) queryBuilder.where('category', category);
      if (ordering) queryBuilder.orderBy('name', ordering);
      if (search) queryBuilder.whereILike('name', `%${search}%`);
    });
  return result;
}

module.exports = { getProducts };
