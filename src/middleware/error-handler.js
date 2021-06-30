const { NODE_ENV } = require('../config');

module.exports = function errorHandler(error, req, res, next) {
  const response =
    NODE_ENV === 'production'
      ? { error: 'Server error' }
      : console.error(error);
  response = { message: error.message, error };

  res.status(500).json(response);
};
