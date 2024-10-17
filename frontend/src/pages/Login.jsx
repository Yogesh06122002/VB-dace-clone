import React from 'react'
import login from '../assets/Cooking.png'

function Login() {
  return (
    <div>
      <div className="flex">
        <div className='bg-[#EEEAE6] w-[50%] p-1'>
          <img src={login} alt="" className='w-full h-full' />

        </div>
        <div className='mt-24 text-center  m-auto'>
          <p className='font-semibold text-[22px]'>Login to your Account!</p>
          <p className='text-gray-400 mt-5'>Login with your email ID to access your account</p>

        </div>
      </div>
    </div>
  )
}

export default Login