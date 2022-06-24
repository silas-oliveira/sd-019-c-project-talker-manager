// const validateToken = (err, _req, res, next) => {
//   const { name, message } = err;
//   console.log('errorName', err.name);

//   switch (name) {
//     case 'tokenNotFound':
//     case 'invalidToken':
//       res.status(401).json({ message });
//       break;
//     default:
//       return res.status(1000).json({ message });
//   }
//   next();
// };

// module.exports = { validateToken }; 