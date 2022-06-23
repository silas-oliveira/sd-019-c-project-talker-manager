const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message);
  error.name = name;
  throw error;
};

const throwNotFoundError = throwError('NotFoundError', 'not found');
const personNotFound = throwError('personNotFound', 'Pessoa palestrante não encontrada');

module.exports = {
  throwNotFoundError,
  personNotFound,
};