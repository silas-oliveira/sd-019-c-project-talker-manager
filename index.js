const express = require('express');
const bodyParser = require('body-parser');
const { managerRoute } = require('./src/api/routes/manager.routes');

const api = express();
api.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
api.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

api.use("/talker", managerRoute);


api.listen(PORT, () => {
  console.log('Online');
});


