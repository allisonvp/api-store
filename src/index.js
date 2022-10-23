const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const boomErrorHandler = require('./middlewares/error.handler');

function app() {
  const app = express();
  const port = process.env.PORT || 3000;
  const whitelist = ['https://bsaletest-client.netlify.app/'];
  const options = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('no permitido'));
      }
    },
  };

  //Settings
  app.listen(port);

  //Middlewares
  app.use(cors(options));
  app.use(boomErrorHandler);

  //Routes
  routerApi(app);
}

app();
