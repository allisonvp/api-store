
# Bsale Store RESTful API with Node.js

RESTful Web API with Node.js 16 connected to a MySQL database and deployed in Heroku.

## API Documentation

You can see the documentation and run it in Postman.

[API Documentation](https://documenter.getpostman.com/view/11816456/2s84DstgJA)


## Built with

|           |          |
| :-------- | :------- |
|<img src="https://skillicons.dev/icons?i=nodejs" /> | [Node.js](https://nodejs.org/en/)  - JavaScript environment |
|<img src="https://skillicons.dev/icons?i=expressjs" /> | [Express](https://expressjs.com/) - The web framework used |
|<img src="https://skillicons.dev/icons?i=heroku" /> | [Heroku](https://heroku.com/) - Cloud Application Platform for deploy |
|<img src="https://skillicons.dev/icons?i=mysql" /> | [MySQL](https://mysql.com/) - Relational database |
|           |          |

## API Reference

#### Get products

```
  GET https://api-bsaletest.herokuapp.com/api/products?ordering=desc&category=5
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ordering` | `string` | **Optional** can be `asc` or `desc` |
| `search` | `string` | **Optional** filter by name |
| `category` | `integer` | **Optional** filter by category|

List products. You can use query params to filter them by category, ordering and search.

#### Get categories

```
  GET https://api-bsaletest.herokuapp.com/api/categories
```

List categories.

## Run Locally

Click on Code

<img src="https://docs.github.com/assets/cb-20363/images/help/repository/code-button.png" width=400/>

Copy the repository URL.

<img src="https://docs.github.com/assets/cb-33207/images/help/repository/https-url-clone-cli.png" width=400/>

Open Git Bash and change the current working directory to the location where you want to clone the project.

```bash
  git clone https://github.com/allisonvp/api-bsale-test.git
```

Go to the project directory

```bash
  cd api-bsale-test/
```

Open the project and create the .env file. You will need to add the following [environment variables](https://github.com/allisonvp/api-bsale-test#environment-variables) to your .env file. 

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Open a web browser and access to the localhost API endpoint with the port 3000: ```http://localhost:3000/api/products```.
Go to the [API documentation](https://documenter.getpostman.com/view/11816456/2s84DstgJA) to see the other endpoints.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_NAME`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`
