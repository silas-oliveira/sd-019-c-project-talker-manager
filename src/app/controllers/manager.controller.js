const { managerService } = require("../services/manager.service");

const managerController = {
  async list() {
    const result = await managerService.list();
    return result;
  },

  async get(id) {
    const result = await managerService.get(id);
    return result;
  },

  async add(id) {
    console.log('id', id);
    // const data = await todosValidator.bodyAdd(body)
    const result = await managerService.add(id);
    return result;
  }
}

module.exports = { managerController };