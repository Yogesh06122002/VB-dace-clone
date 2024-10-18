import React from 'react'
import welcome from '../assets/welcome.png'

function Hero() {
  return (
    <div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0616/7222/6982/files/snack-chef-vb-dace.jpg?v=1726986104" alt="" className=' ' />
      </div>
      <div className='relative flex justify-center items-center overflow-hidden  '>
        <div className='absolute h-full z-10 w-full bg-black opacity-30'></div>
        <img src ={welcome} alt="" className='scale-150 lg:scale-100 mt-11 lg:mt-0  ' />
        <div className='text-center absolute z-20 text-white space-y-6 lg:mt-0 mt-10'>
          <h1 className='lg:text-4xl text-lg'>Cooking Appliances, Redefined.</h1>
          <button className='border-white hover:bg-white hover:text-black px-5 py-2  lg:text-xl border-[1px] lg:w-[38%] rounded-md'>Shop Now</button>
        </div>
      </div>
      <div className='py-28 lg:px-72 px-4'>
        <h1 className='text-center lg:text-3xl text-xl mb-5 font-normal'>Motto of VB DACE</h1>
        <p className='text-center '>VB DACE as a brand, strongly believes in making Cookware that are non-toxic, healthy to use, aesthetically pleasing, completely user-friendly and built to last for ages!
          <br />
          <br />
          Each of our products are designed by the man himself (Chef Venkatesh Bhat), who has an eye for detail, and fine-tuned to precision over multiple iterations before it reaches your hand!Be ready to level up your cooking experience with our Premium Products that are sure to be a part of your HEIRLOOM collection!
        </p>

      </div>
    </div>
  )
}

export default Hero