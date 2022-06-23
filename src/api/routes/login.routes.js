const { Router } = require('express');
const { managerController } = require('../../app/controllers/manager.controller');

const loginRouter = Router();

loginRouter.post('/', async (req, res, _next) => {
  const result = await managerController.add(req.body);
  return res.status(200).json(result);
});

module.exports = { loginRouter };