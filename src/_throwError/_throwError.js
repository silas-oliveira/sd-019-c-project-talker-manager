const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message);
  error.name = name;
  throw error;
};

const throwNotFoundError = throwError('NotFoundError', 'not found');
const personNotFound = throwError('personNotFound', 'Pessoa palestrante não encontrada');
const tokenNotFound = throwError('tokenNotFound', 'Token não encontrado');
const invalidToken = throwError('invalidToken', 'Token inválido');
const underAge = throwError('underAge', 'A pessoa palestrante deve ser maior de idade');

module.exports = {
  throwNotFoundError,
  personNotFound,
  tokenNotFound,
  invalidToken,
  underAge,
};