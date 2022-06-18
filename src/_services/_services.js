const throwError = (name, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message);
  error.name = name;
  throw error;
}

