
# Bsale Store RESTful API with Node.js

RESTful Web API with Node.js 16 connected to a MySQL database and deployed in Heroku.

## Documentation

You can see the documentation and run it in Postman.

[Documentation](https://documenter.getpostman.com/view/11816456/2s84DstgJA)


## Built with

<img src="https://skillicons.dev/icons?i=nodejs" /> [Node.js](https://nodejs.org/en/)  - JavaScript environment </br>

<img src="https://skillicons.dev/icons?i=expressjs" /> [Express](https://expressjs.com/) - The web framework used </br>

<img src="https://skillicons.dev/icons?i=heroku" /> [Heroku](https://heroku.com/) - Cloud Application Platform for deploy </br>

<img src="https://skillicons.dev/icons?i=mysql" /> [MySQL](https://mysql.com/) - Relational database </br>


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
