const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message);
  error.name = name;
  throw error;
}

const throwNotFoundError = throwError('NotFoundError', 'not found');
const personNotFound = throwError('personNotFound', 'Pessoa palestrante não encontrada');

// const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
//   const error = new Error(message);
//   error.name = name;
//   // throw error;
//   return 'error here'
// }

// const throwNotFoundError = throwError('NotFoundError', 'not found');
// const personNotFound = throwError('personNotFound', 'Pessoa palestrante não encontrada');

// const ingridValidate = (status, message) => ({
//   status,
//   message
// });

module.exports = {
  throwNotFoundError,
  personNotFound
}