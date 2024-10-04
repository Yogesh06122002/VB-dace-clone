import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/vbdace')
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/products',productRoutes);


// connectDB();

const PORT  = process.env.PORT;

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});


