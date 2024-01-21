import express from 'express';
import { MongoClient } from 'mongodb';

const url = process.env['URL'];
const dbName = process.env['DB_NAME'];

const client = new MongoClient(url);
await client.connect();
const db = client.db(dbName);
const collection = db.collection('documents');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080);
