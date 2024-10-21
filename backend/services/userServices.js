import User from '../models/userSchema.js'

export const register = async (data) => {

  const existUser = await User.findOne({userEmail : data.email});

  if(existUser){
    res.send("Email already exist")
  }else{

    const result = await User.create(data);
    return result;
  }
}

export const login = async (data) => {
  const result = await User.findOne({userEmail: data.email});
  return result;
}
