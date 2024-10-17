import React from 'react'

function Orders() {
  return (
    <div>
      <div className='ml-16 mt-5'>VBDace.com / My order</div>
      <div className='mt-16 flex ml-16'>
        <button className='bg-[#C69F71]  text-white p-2 px-3 font-semibold rounded-md shadow-md'>
          Orders
        </button>
        <button className='ml-10 text-gray-700'>
        Cancelled Orders
        </button>
      </div>
      <div className='font-semibold text-xl text-gray-700 p-20 pb-40 pl-40'>
      No Orders
      </div>
    </div>
  )
}

export default Orders