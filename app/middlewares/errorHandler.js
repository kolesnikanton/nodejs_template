const { STATUSES } = require('../constants');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(STATUSES.internalServerError).send('Error');
};

module.exports = errorHandler;
