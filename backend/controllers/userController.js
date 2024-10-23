import { login, register } from "../services/userServices.js";


export const userRegister = async (req,res,next) => {
  const data = req.body;
  const user = await register(data);
  try{

    if(user){
      res.status(201).json({message:"User Registered successfully"});
    }else{
      console.log("user registration failed")
    }
  }catch(err){
    if( err.message === "Email already exist"){
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
    if(user && !user.error){
      
      res.status(200).json({message:"login successful"})
    }else if (user & user.error) {
      res.status(401).json({message:"user.error"})
    }
    else{
      res.status(404).json({message:"user not found"})
    }
  }catch(err){
    console.log("something went wrong",err)
  }
}