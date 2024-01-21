import express from 'express';
import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://ewanbuchanan8:Mycomputer437!@cluster0.csowqot.mongodb.net/';
const dbName = 'nwhack2024';

const client = new MongoClient(url);
await client.connect();
const db = client.db(dbName);
const collection = db.collection('documents');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080);
