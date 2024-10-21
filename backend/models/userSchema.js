import mongoose from "mongoose";

const  userSchema = mongoose.Schema({
  userName : {
    type:String,
    required:true
  },
  userPhno:{
    type:Number,
    required:true
  },
  userEmail:{
    type:String,
    required:true
  },
  userPassword:{
    type:String,
    required:true
  }
})

const User = mongoose.model("User",userSchema);
export default User;
