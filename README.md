
# Bsale Store RESTful API with Node.js

RESTful Web API with Node.js 16 connected to a MySQL database and deployed in Heroku.

## Documentation

You can see the documentation and run it in Postman.

[Documentation](https://documenter.getpostman.com/view/11816456/2s84DstgJA)


## Built with

- [Node.js](https://nodejs.org/en/)  - JavaScript environment
- [Express](https://expressjs.com/) - The web framework used


## API Reference

#### Get all items

```
  GET https://api-bsaletest.herokuapp.com/api/products?ordering=desc&category=5
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ordering` | `string` | **Optional** can be `asc` or `desc` |
| `search` | `string` | **Optional** filter by name |
| `category` | `integer` | **Optional** filter by category|

List products. You can use query params to filter them by category, ordering and search.

#### Get item

```
  GET https://api-bsaletest.herokuapp.com/api/categories
```

List categories.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_NAME`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`
