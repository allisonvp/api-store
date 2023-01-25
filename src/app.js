const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

function app() {
  const app = express();

  //Port in heroku or port 3000 locally
  const port = process.env.PORT || 3000;

  //Settings
  app.listen(port);

  //Middlewares
  app.use(cors());

  //Routes
  routerApi(app);
}

module.exports = app;
