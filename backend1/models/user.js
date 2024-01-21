import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  numReps: Number
});

const User = model('User', userSchema); 

export default User;
