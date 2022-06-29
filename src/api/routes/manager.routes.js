const { Router } = require('express');
const { managerController } = require('../../app/controllers/manager.controller');

const managerRouter = Router();

managerRouter.get('/:id', async (req, res, _next) => {
  const { id } = req.params;
  const result = await managerController.get(id);
  return res.status(200).json(result);
});

managerRouter.get('/', async (_req, res) => {
  const result = await managerController.list();
  return res.status(200).json(result);
});

managerRouter.post('/', async (req, res, _next) => {
  const result = await managerController.add(req.body, req.headers);
  return res.status(201).json(result);
});

managerRouter.put('/:id', async (req, res, _next) => {
  const result = await managerController.edit(req.params, req.body, req.headers);
  return res.status(200).json(result);
});

managerRouter.delete('/:id', async (req, res, _next) => {
  await managerController.delete(req.params, req.headers);
  return res.status(204);
});

module.exports = { managerRouter };