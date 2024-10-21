import React from 'react'

function Our() {
  return (
    <div>
      <div>
        <p className='text-center text-2xl lg:text-[28px] mt-5 lg:mt-10 font-semibold lg:font-medium'>Our Experience Centers</p>
      </div>
      <div className='mx-4 lg:mx-20'>
        <p className=' text-2xl mt-4 lg:mt-0 lg:text-3xl'>Chennai</p>
        <div className="lg:flex pt-4 pb-16">
          <div className='lg:w-[24%] w-[80%]'>
            <p className='font-semibold text-xl lg:text-[22px]'>1. Perungudi</p>
            <p className='text-base font-normal mt-2'>VB DACE Appliances Pvt. Ltd.,<br />
              3'rd Floor, Falcon Heights,Plot No. 30,
              Industrial Estate Main Road,Perungudi,
              Chennai – 600096, Tamil Nadu. <br />
              Ph no: +91 79040 71678.
              <br />
              <br />
              <span className='font-semibold'>Timings:</span> <br />
              Monday to Friday: <span className='font-semibold'>10 AM to 6 PM. </span><br />
              Saturday:<span className='font-semibold'> 10 AM to 3 PM. </span><br />
              Sunday: Holiday. <br />
              Store Locator: <span className='text-blue-700'>https://g.co/kgs/U693bbx</span></p>

          </div>
          <div className='lg:w-[30%] lg:ml-32 mt-4 lg:mt-0'>
          <p className='font-semibold text-xl lg:text-[22px]'>2. Alwarpet</p>
          <p className='text-base font-normal mt-2'>
          VB DACE Appliances Pvt. Ltd.,<br />
          7/8, 1st St, Seethammal Colony,<br />
          Alwarpet,<br />
          Chennai - 600 108, Tamil Nadu. <br />
          Ph no: 044-3503 1977.
          <br />
          <br />
          <span className='font-semibold'>Timings:</span><br />
          Monday to Sunday:<span className='font-semibold'> 10 AM to 8 PM.</span><br />
          Store Locator:<span className='text-blue-700'> View on Google Maps</span>
          </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Our