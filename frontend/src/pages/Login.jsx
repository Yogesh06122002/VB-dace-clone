import React from 'react'
import login from '../assets/Cooking.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userEmail:'',
    userPassword:''
  })

  const handleChange = async (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(formData);
    try{

      await axios.get('http://localhost:5005/api/user/login',formData)
      .then(response => console.log(response.data))
      .catch(error => console.error('Network Error', error));
      console.log("login successfully");
      navigate('/');
    }catch(err){
      console.log("something went wrong",err);
    }
  }
  return (
    <div>
      <div className="flex">
        <div className='bg-[#EEEAE6] w-[50%] p-1 hidden lg:block '>
          <img src={login} alt="" className='w-auto h-auto' />
          <div className='px-16 bg-[#EEEAE6] text-4xl'>VB Dace </div>
          <div className="px-16 py-6  bg-[#EEEAE6]">Aesthetically pleasing, long-lasting appliances with cutting-edge technology.</div>

        </div>
        <div className='mt-4 lg:mt-24 m-auto  lg:w-[50%]  '>
          <div className='text-center '>

          <p className='font-semibold text-[22px]'>Login to your Account!</p>
          <p className='text-gray-400 mt-5  pb-16   '>Login with your email ID to access your account</p>
          </div>

        <div className=" lg:mx-28 ">
          <div className="border-gray-300 border-t-2">
            <form action="" onSubmit={handleSubmit} className='mt-10 text-gray-500 space-y-10'>
              <div className="space-y-3">

              <label htmlFor="">Email ID *</label>
              <input type="email" name="userEmail" value={formData.userEmail} id="" className="w-full px-3 py-3 placeholder-slate-600 border border-gray-400 rounded-md " onChange={handleChange} placeholder='Enter E-mail Id'/>
              </div>
              <div className="space-y-3">

            <label htmlFor="">Password *</label>
            <input type="password" name="userPassword" value={formData.userPassword} onChange={handleChange} id="" className="w-full px-3 py-3 placeholder-slate-600 border border-gray-400 rounded-md " placeholder='Enter Password'/>
              </div>
              <div className='text-end'>Forgot password</div>
              <button className='w-full border-gray-400 py-5  rounded-md text-center font-semibold text-white bg-[#b38558]' type='submit'>Login</button>
            </form>
            <div className="text-center mt-10">Don’t have an account? <Link to='/register' className='text-[#b38558]'>Signup</Link></div>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Login