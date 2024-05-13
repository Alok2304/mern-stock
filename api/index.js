import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to database")})
.catch(err => console.log(err));


const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}!!`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
