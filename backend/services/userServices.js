
import User from '../models/userSchema.js'


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
    if(data.userPassword === existUser.userPassword){

      return existUser;
    }
    else{
      return {error:"invalid password"}
    }
    
  
  }
  return {error:"user not found"};
}
