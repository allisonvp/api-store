
# Store REST API with Node.js and Express

This project consists of building an online store, where the user can initially see all the products, can search for them, sort them in ascending or descending order and can also filter the products by category. In addition, the user can see the products with the discount applied in case they have a discount.

It is requested to build separately Backend (REST API) and [Frontend](https://github.com/allisonvp/store-client) (application that consumes it).

The REST API was developed with Node.js and Express. The REST API connects and makes SQL queries to a MySQL database deployed in AWS RDS. This database has two tables: products and categories. To request the data, the REST API was developed with the following endpoints that can be viewed and executed in Postman: [API Documentation](https://documenter.getpostman.com/view/11816456/2s84DstgJA).


## Built with

|           |          |
| :-------- | :------- |
|<img src="https://skillicons.dev/icons?i=nodejs" /> | [Node.js](https://nodejs.org/en/)  - JavaScript environment |
|<img src="https://skillicons.dev/icons?i=expressjs" /> | [Express](https://expressjs.com/) - The web framework used |
|<img src="https://skillicons.dev/icons?i=vercel" /> | [Vercel](https://vercel.com/) - Cloud Application Platform for deploy |
|<img src="https://skillicons.dev/icons?i=mysql" /> | [MySQL](https://mysql.com/) - Relational database |
|           |          |

## API Documentation

#### Get products

```
  GET https://api-store-seven.vercel.app/api/products?ordering=desc&category=5
```

| Params | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ordering` | `string` | **Optional** can be `asc` or `desc` |
| `search` | `string` | **Optional** filter by name |
| `category` | `integer` | **Optional** filter by category|

List products. You can use query params to filter them by category, ordering and search.

#### Get categories

```
  GET https://api-store-seven.vercel.app/api/categories
```

List categories.

## Run Locally

Click on Code

<img src="https://docs.github.com/assets/cb-20363/images/help/repository/code-button.png" width=400/>

Copy the repository URL.

<img src="https://docs.github.com/assets/cb-33207/images/help/repository/https-url-clone-cli.png" width=400/>

Open Git Bash and change the current working directory to the location where you want to clone the project.

```bash
  git clone https://github.com/allisonvp/api-store.git
```

Go to the project directory

```bash
  cd api-store/
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


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_NAME`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`
