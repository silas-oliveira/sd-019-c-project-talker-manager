const loginShema = require('../../schemas/loginSchema');
const talkerSchema = require('../../schemas/talkerSchema');
const { tokenNotFound, invalidToken, underAge } = require('../../_throwError/_throwError');
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

  async add(body, auth) {
    const { name, age, talk } = body;
    const { authorization } = auth;
    if (!authorization) return tokenNotFound();
    if (authorization.length < 16) return invalidToken();
    const { error } = talkerSchema.validate({ name, age, talk });
    if (error) throw error;
    if (age < 18) return underAge();
    const result = await managerService.add(body);
    return result;
  },

  async login(body) {
    const { email, password } = body;
    const { error } = loginShema.validate({ email, password });
    if (error) throw error;
    const result = await managerService.login();
    return result;
  },
  
  async edit(params, body, headers) {
    const { name, age, talk } = body;
    const { authorization } = headers;
    if (!authorization) return tokenNotFound();
    if (authorization.length < 16) return invalidToken();
    const { error } = talkerSchema.validate({ name, age, talk });
    if (error) throw error;
    if (age < 18) return underAge();
    const result = await managerService.edit(params, body);
    return result;
  },

  async delete(params, auth) {
    const { authorization } = auth;
    const { id } = params;
    if (!authorization) return tokenNotFound();
    if (authorization.length < 16) return invalidToken();
    const result = await managerService.delete(id);
    return result;
  },

  async search(headers, query) {
    const { authorization } = headers;
    const { q } = query;
    console.log('query', q);
    if (!authorization) return tokenNotFound();
    if (authorization.length < 16) return invalidToken();
    const result = await managerService.search(q);
    return result;
  },
};

module.exports = { managerController };