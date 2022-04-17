const mongo = require('../db/mongo');

const test = async ({ email, password }) => {
  console.log({ email, password });

  try {
    const insert = (collection) => collection.insertOne({ a: 'Hello' });
    const find = (collection) => collection.find({}).toArray();

    await mongo.connect();
    await mongo.clientQuery(insert, 'collection');
    const result = await mongo.clientQuery(find, 'collection');
    // const result = {};
    return result;
  } catch (err) {
    throw new Error(err);
  } finally {
    await mongo.close();
  }
};

module.exports = {
  test,
};
