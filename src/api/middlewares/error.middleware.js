const errorHandler = (err, _req, res, next) => {
  const { name, message } = err;
  console.log('errorName', err.name);

  switch (name) {
    case 'personNotFound':
      res.status(404).json({ message });
      break;
    case 'tokenNotFound':
    case 'invalidToken':
      res.status(401).json({ message });
      break;
    default:
      return res.status(400).json({ message });
  }
  next();
};

// const error = (err, _req, res, next) => {
//   const { message } = err;

//   if (err) {
//     res.status(400).json(message);
//   }
//   next();
// };

module.exports = { errorHandler }; 