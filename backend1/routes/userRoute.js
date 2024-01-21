import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        return response.status(200).send(users); // Send the fetched users in the response
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.numReps
        ) {
            return response.status(400).send({
                message: 'Send all required fields: username, numReps',
            });
        }
        const newUser = {
            username: request.body.username,
            numReps: request.body.numReps, // corrected from 'author' to 'numReps'
        };
        

        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});

router.get('/sorted', async (request, response) => {
    try {
        const users = await User.find().sort({ numReps: 1 }); // 1 for ascending order
        return response.status(200).send(users);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/deleteAll', async (request, response) => {
    try {
        await User.deleteMany({}); // Deletes all documents from the User collection
        return response.status(200).send({ message: 'All users deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


export default router;
