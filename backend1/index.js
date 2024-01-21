import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import cors from 'cors';
import express from "express";

const mongoDBURL = "mongodb+srv://enkailiu1:IZFcooRhr1y3up3M@cluster0.5vaq3e0.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json()); 

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send("success!");
});

app.use('/User/', userRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
    })
    .catch((error) => {
        console.error('Database connection failed', error);
    });

export default app;
