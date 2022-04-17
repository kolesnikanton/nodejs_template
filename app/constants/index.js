const STATUSES = {
  success: 200,
  internalServerError: 500,
};

const CONFIG = {
  port: 3000,
  mongoURI: 'mongodb://localhost:27017',
};

module.exports = {
  STATUSES,
  CONFIG,
};
