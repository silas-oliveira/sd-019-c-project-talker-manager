const fs = require('fs').promises;
const { nanoid } = require('nanoid');
const { personNotFound } = require('../../_throwError/_throwError');

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

  async add() {
    const token = nanoid(16);
    console.log(token);
    return { token };
  },
};

module.exports = { managerService };