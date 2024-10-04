import React from 'react'

function Contact() {
  return (
    <div>
      <div className='mt-10 text-center text-[28px] font-semibold'>Contact Us</div>
      <div className="mx-20">
        <p className='mt-10'>We’d love to hear from you! For inquiries, feedback, or support, please reach out to us:</p>
        <br />
        <p className='font-semibold'>Email: <span className='text-blue-700 font-normal'><a href="mailto:support@vbdace.com"> support@vbdace.com</a></span></p>
        <br />
        <p className='font-semibold'>Phone: <span className='text-blue-700 font-normal'><a href="tel:+91 79040 71678"> +91 79040 71678</a></span></p>
        <br />
        <p>
          <span className='font-semibold'>Address:</span> <br />
          VB DACE Appliances Pvt. Ltd., <br />
          3'rd Floor, Falcon Heights,Plot No. 30, <br />
          Industrial Estate Main Road,Perungudi, <br />
          Chennai – 600096, Tamil Nadu.
        </p>
        <br />
        <p>
          <span className='font-semibold'>Timings:</span><br />
          Monday to Friday: 10 AM to 6 PM. <br />
          Saturday: 10 AM to 3 PM. <br />
          Sunday: Holiday.
        </p>
        <br />
        <p>
        You can also follow us on social media for the latest updates and promotions: <br />
        <div className=' justify-center '>

        <span className='font-semibold' >Instagram: </span><span className='text-blue-700'> vbdace.store</span><br />
        <span className='font-semibold' >Facebook: </span><span className='text-blue-700'> VB DACE</span>
        </div>

        </p>
        <br />
        <p className='pb-10'>Thank you for choosing <span className='font-medium'>VB DACE!</span> </p>
      </div>
    </div>
  )
}

export default Contact