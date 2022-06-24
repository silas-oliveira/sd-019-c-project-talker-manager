const Joi = require('joi').extend(require('@joi/date'));

const talkerSchema = Joi.object({
  name:
    Joi.string()
      .min(3)
      .required()
      .messages({
        'any.required': 'O campo "name" é obrigatório',
        'string.min': 'O "name" deve ter pelo menos 3 caracteres',
      }),
  age:
    Joi.number()
      .integer()
      .required()
      .messages({
        'any.required': 'O campo "age" é obrigatório',
      }),
  talk: Joi.object({
    watchedAt:
      Joi
        .date()
        .format('DD/MM/YYYY')
        .utc()
        .required()
        .messages({
          'any.required': 'O campo "watchedAt" é obrigatório',
          'date.format': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        }),
    rate:
      Joi.number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages({
          'any.required': 'O campo "rate" é obrigatório',
          'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
          'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
        }),
  })
  .messages({
    'any.required': 'O campo "talk" é obrigatório',
  })
  .required(),
}).required();

module.exports = talkerSchema;