const { personNotFound } = require('../../_services/_services');

const fs = require('fs').promises;

const managerService = {
  async get(id) {
    const result = await fs.readFile('./talker.json', 'utf-8');
    const fileParsed = JSON.parse(result);
    const personResult = fileParsed.find((person) => person.id === +id);
    if (!personResult) return personNotFound();
    return personResult;
  },

  async list() {
    const result = await fs.readFile('./talker.json', 'utf-8');
    if (result.length <= 0) return [];
    return JSON.parse(result);
  },

  async add(data) {
    const result = 'usuario pelo id';
    return result;
  }
}

module.exports = { managerService };