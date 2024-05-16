import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import path from "path";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to database")})
.catch(err => console.log(err));

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}!!`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
