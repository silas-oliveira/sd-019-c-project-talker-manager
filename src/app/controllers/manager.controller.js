const loginShema = require('../../schemas/loginSchema');
const { managerService } = require('../services/manager.service.js');

const managerController = {
  async list() {
    const result = await managerService.list();
    return result;
  },

  async get(id) {
    const result = await managerService.get(id);
    return result;
  },

  async add(body) {
    const { email, password } = body;
    const { error } = loginShema.validate({ email, password });
    if (error) throw error;
    const result = await managerService.add();
    return result;
  },
};

module.exports = { managerController };