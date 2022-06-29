const fs = require('fs').promises;
const { nanoid } = require('nanoid');
const { personNotFound } = require('../../_throwError/_throwError');

const managerService = {
  async database() {
    return fs.readFile('./talker.json', 'utf-8');
  },

  async list() {
    const db = await this.database();
    if (db.length <= 0) return [];
    return JSON.parse(db);
  },

  async get(id) {
    const db = await this.database();
    const fileParsed = JSON.parse(db);
    const personResult = fileParsed.find((person) => person.id === +id);
    if (!personResult) return personNotFound();
    return personResult;
  },

  async add(body) {
    const { name, age, talk } = body;
    const db = await this.database();
    const talkers = JSON.parse(db);
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

  async edit(params, body) {
    const db = await this.database();
    const data = JSON.parse(db);
    const { id } = params;
    const talkersEdited = data.map((person) => {
     if (person.id === +id) {
        const result = { ...person, ...body };
        return result;
     }
     return person;
    });
    const talkerEdited = talkersEdited.find((person) => person.id === +id);
    await fs.writeFile('./talker.json', JSON.stringify(talkersEdited));
    return talkerEdited;
  },

  async delete(id) {
    const db = await this.database();
    const data = JSON.parse(db);
    const personDeleted = data.filter((person) => person.id !== +id);
    await fs.writeFile('./talker.json', JSON.stringify(personDeleted));
  },
};

module.exports = { managerService };