const { managerController } = require("../../app/controllers/manager.controller");

const { Router } = require("express");

const managerRoute = Router();

managerRoute.get('/:id', async () => {
  const result = await managerController.get();
  return res.status(200).json(result)
});

// managerRoute.put('/:id', async () => { });

// managerRoute.delete('/:id', async () => { });

managerRoute.post('/', async (req, res) => {
  const result = await managerController.add(req.body);
  return res.status(200).json(result)
});

managerRoute.get('/', async (req, res) => {
  const result = await managerController.list();
  return res.status(200).json(result)
});

module.exports = { managerRoute };