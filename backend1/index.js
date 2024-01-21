import mongoose from 'mongoose'
import userRoute from './routes/userRoute.js';
const PORT = 5555;
const mongoDBURL = "mongodb+srv://enkailiu1:IZFcooRhr1y3up3M@cluster0.5vaq3e0.mongodb.net/?retryWrites=true&w=majority";
import cors from 'cors';
import express from "express";

const app = express();
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("sucess!")
});

app.use('/User/', userRoute);
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
