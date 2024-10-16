import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));



const corsOptions = {
  origin : [process.env.APPLICATION_URL,'https://vb-dace-clint.vercel.app'],
  methods : ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: true
} 
app.use(express.json());
app.use(cors(corsOptions));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/products',productRoutes);


// connectDB();

const PORT  = process.env.PORT;

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});



