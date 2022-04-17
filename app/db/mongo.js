const { MongoClient } = require('mongodb');
const { CONFIG } = require('../constants');

const client = new MongoClient(CONFIG.mongoURI, { useUnifiedTopology: true });

const connect = async () => {
  await client.connect();
};

const close = async () => {
  await client.close();
};

const clientQuery = async (query, collectionName, dbName = 'test') => {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const result = await query(collection);

  return result;
};

module.exports = {
  connect,
  close,
  clientQuery,
};
