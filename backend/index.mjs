//const { MongoClient } = require('mongodb');
// or as an es module:
import { MongoClient } from 'mongodb'

// Connection URL
const dburi = 'mongodb+srv://ewanbuchanan8:Mycomputer437!@cluster0.csowqot.mongodb.net/';
const dbName = 'nwhack2024';
const client = new MongoClient(dburi)

// Database Name


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());







