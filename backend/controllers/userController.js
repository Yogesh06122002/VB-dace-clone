import { login, register } from "../services/userServices.js";


export const userRegister = async (req,res,next) => {
  const data = req.body;
  const user = await register(data);
  try{

    if(user){
      res.send(user);
    }else{
      console.log("user registration failed")
    }
  }catch(err){
    if( err === "Email already exist"){
      res.status(400).send({ message: 'Email already exists' });
    }else{

      console.log("something went wrong",err)
    }
  }

}

export const userLogin = async (req,res,next) => {
  const data = req.body;
  // console.log(user);
  try{
    const user = await login(data);
    if(user){
      res.send(user);
      // console.log("user login successfull")
    }else{
      console.log("user login failed")
    }
  }catch(err){
    console.log("something went wrong",err)
  }
}