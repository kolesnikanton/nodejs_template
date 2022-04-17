const models = require('../models');

const test = async (testData) => {
  const data = await models.test.test(testData);
  return data;
};

module.exports = {
  test,
};
