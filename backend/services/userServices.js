import { response } from 'express';
import User from '../models/userSchema.js'
import bcrypt from 'bcrypt' 

export const register = async (data) => {

  const existUser = await User.findOne({userEmail : data.userEmail});

  if(existUser){
    console.log("Email already exist");
  }else{

    const result = await User.create(data);
    return result; 
  }
}

export const login = async (data) => {
  const existUser = await User.findOne({userEmail : data.userEmail});
  if(existUser){
   return existUser;
    
  
  }
  return null;
}
