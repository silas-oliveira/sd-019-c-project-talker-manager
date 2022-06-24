const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./src/api/middlewares/error.middleware');
const { managerRouter, loginRouter } = require('./src/api/routes');

const api = express();
api.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
api.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

api.use('/talker', managerRouter);
api.use('/login', loginRouter);

api.listen(PORT, () => {
  console.log('Online');
});

api.use(errorHandler);
