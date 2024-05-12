import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to database")})
.catch(err => console.log(err));


const app = express();
const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}!!`);
});