import express from 'express';
import { MongoClient } from 'mongodb';

// const url = 'mongodb+srv://ewanbuchanan8:Mycomputer437!@cluster0.csowqot.mongodb.net/';
// const dbName = 'nwhack2024';

const url = process.env['URL'];
const dbName = process.env['DB_NAME'];

const client = new MongoClient(url);
await client.connect();
const db = client.db(dbName);
const users = db.collection('Users');

// the following code examples can be pasted here...
//const result = await collection.insertOne({Username: "Ewan", reps: 10, time: "0:30", name: "ewan", password: "1234"})
//const existingUser = await collection.findOne({ Username: inputUsername });
//const result = await collection.updateOne({ Username: "Ewan" }, { $set: { reps: 20 } });
//const result = await collection.findOneAndReplace({ Username: "Ewan" }, { Username: "Ewan", reps: 10, time: "0:30", name: "ewan", password: "1234" });

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/signup', async (req, res) => {
    if (!req.body.username || !req.body.password || req.body.username === '' || req.body.password === '') {
        return res.status(400).send('Username or password cannot be empty');
    }
    const existingUser = await users.findOne({ Username: req.body.username });
    if (existingUser !== null) {
        return res.status(400).send('Username already exists');
    }
    await users.insertOne({ Username: req.body.username, reps: 0, time: "0:00", name: req.body.username, password: req.body.password });
    return res.status(200).send('Created account');
});

app.post('/signin', async (req, res) => {
    if (!req.body.username || !req.body.password || req.body.username === '' || req.body.password === '') {
        return res.status(400).send('Username or password cannot be empty');
    }
    const existingUser = await users.findOne({ Username: req.body.username, password: req.body.password });
    if (existingUser === null) {
        return res.status(401).send('Incorrect username or password');
    }
    return res.status(200).send('Signed in');
});

// app.post('/logout', async (req, res) => {
//     //if ()
// })

app.listen(8080);
