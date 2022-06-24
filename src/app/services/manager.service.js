const fs = require('fs').promises;
const { nanoid } = require('nanoid');
const { personNotFound } = require('../../_throwError/_throwError');

const managerService = {
  async list() {
    const result = await fs.readFile('./talker.json', 'utf-8');
    if (result.length <= 0) return [];
    return JSON.parse(result);
  },

  async get(id) {
    const result = await fs.readFile('./talker.json', 'utf-8');
    const fileParsed = JSON.parse(result);
    const personResult = fileParsed.find((person) => person.id === +id);
    if (!personResult) return personNotFound();
    return personResult;
  },

  async add(body) {
    const { name, age, talk } = body;
    const result = await fs.readFile('./talker.json', 'utf-8');
    const talkers = JSON.parse(result);
    const orderTalkers = talkers.sort((a, b) => b.id - a.id);
    const lastID = orderTalkers[0].id;

    const newTalker = { id: lastID + 1, name, age, talk };
    await fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalker]));
    return newTalker;
  },

  async login() {
    const token = nanoid(16);
    console.log(token);
    return { token };
  },
};

module.exports = { managerService };