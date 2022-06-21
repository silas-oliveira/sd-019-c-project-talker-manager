const errorHandler = (err, _req, res, next) => {
  const { name, message } = err;
  console.log('errorName', err.name);

  switch (name) {
    case 'personNotFound':
      res.status(404).json({ message });
      break;
    // case 'NotFoundError':
    //   res.status(404).json({ message })
    //   break
    default:
      return res.status(401).json({ message });
  }
  next();
};

module.exports = errorHandler;