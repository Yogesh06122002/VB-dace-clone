import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

import userRoutes from './routes/userRoutes.js'

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

  origin : [process.env.APPLICATION_URL,'http://localhost:5173','https://vb-dace-clint.vercel.app', 'https://vb-dace-server.vercel.app'],
  methods : ['GET','POST','PUT','DELETE'],
  credentials: true
} 
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // This will allow preflight requests for all routes
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/products',productRoutes);

app.use('/api/user',userRoutes);


// connectDB();

const PORT  = process.env.PORT;

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});



