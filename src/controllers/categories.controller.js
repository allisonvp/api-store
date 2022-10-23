const getConnection = require('../database');

async function getCategories() {
  const connection = await getConnection();
  const result = await connection.select('*').from('category');
  return result;
}

module.exports = { getCategories };
