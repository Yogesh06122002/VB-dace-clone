import React from 'react'
import welcome from '../assets/welcome.png'

function Hero() {
  return (
    <div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0616/7222/6982/files/snack-chef-vb-dace.jpg?v=1726986104" alt="" className=' ' />
      </div>
      <div className='relative flex justify-center items-center  '>
        <div className='absolute h-full w-full bg-black opacity-30'></div>
        <img src ={welcome} alt="" className='' />
        <div className='text-center absolute text-white space-y-6'>
          <h1 className='text-4xl'>Cooking Appliances, Redefined.</h1>
          <button className='border-white hover:bg-white hover:text-black px-5 py-2 text-xl border-[1px] w-[38%] rounded-md'>Shop Now</button>
        </div>
      </div>
      <div className='py-28 px-72'>
        <h1 className='text-center text-3xl mb-5 font-normal'>Motto of VB DACE</h1>
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