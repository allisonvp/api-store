const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routerApi = require('./routes');
const boomErrorHandler = require('./middlewares/error.handler');

function app() {
  const app = express();
  const port = 3000;

  //Settings
  app.listen(port);

  //Middlewares
  app.use(cors());
  app.use(morgan('dev'));
  app.use(boomErrorHandler);

  //Routes
  routerApi(app);
}

app();
