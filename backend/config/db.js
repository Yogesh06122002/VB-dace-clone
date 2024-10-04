import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI).then(() => {

      // console.log(process.env.MONGO_URI, '***')
      
      console.log("Mongodb Connected");
    
    })
  }
  catch(error){
    console.log(`Error: ${error.message}`)
  }
}



export default connectDB;
