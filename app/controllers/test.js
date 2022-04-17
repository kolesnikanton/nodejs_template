const services = require('../services');

const test = async (req, res) => {
  const { email, password } = req.body;

  // TODO: Use validation
  // if (!email || !password) {
  // TODO: Send error
  //  return next();
  // }

  const result = await services.test.test({ email, password });
  return res.send(result);
};

module.exports = {
  test,
};
