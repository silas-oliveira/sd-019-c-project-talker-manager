const Joi = require('joi');

const loginShema = Joi.object({
  email: Joi.string().email().required()
  .messages({
    'any.required': 'O campo "email" é obrigatório',
    'string.email': 'O "email" deve ter o formato "email@email.com"',
  }),
  password: Joi.string().pattern(/^[0-9]+$/).min(4).max(8)
  .required()
  .messages({
    'string.pattern.base': 'must be numbers',
    'any.required': 'O campo "password" é obrigatório',
    'string.min': 'O "password" deve ter pelo menos 6 caracteres',
  }),
}).required().messages({
  'any.required': 'email or password is incorrect',
});

module.exports = loginShema;