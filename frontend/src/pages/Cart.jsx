import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { decreaseCount, deleteProduct, increaseCount } from '../slices/cart';




function Cart() {

  const cart = useSelector(state => state.cart.cart);

  const total = cart.reduce((acc,item)=> acc + item.product?.price.replace(/,/g,'') * item.count ,0);
  const dispatch = useDispatch();

 
  const handleIncrease = (productId) => {
    dispatch(increaseCount({ product_id: productId, amount: 1 }));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseCount({ product_id: productId, amount: 1 }));
  };

   


  return (
    <div className='lg:mx-16 mx-4 mb-16'>
      <div className=' text-[16px] p-8 pl-0'>
        <p>VBDace.com / Mycart</p>
      </div>
      <div className="lg:flex">
        <div className='lg:w-[72%]' >
          <div className='w-full lg:flex hidden text-black font-semibold text-[15px] bg-[#EDEDED]  py-4'>
            <div className='w-[25%] text-center'>Product</div>
            <div className='w-[25%] text-center'>Unit Price</div>
            <div className='w-[25%] text-center'>QTY</div>
            <div className='w-[25%] text-center'>Amount(Rs)</div>
          </div>
            {
              cart.map((item,index) =>{
                const price = parseFloat(item.product?.price.replace(/,/g,'') );
              const count = item.count || 0;
                return(
                  <div key={index}>

                <div  className='w-full hidden lg:flex py-4'>
                  <div className='w-[25%] flex  gap-3 justify-evenly items-center'>
                    <div className=''>

                      {/* <img src={item.product.images[0]} alt=""  className='w-28 h-20'/> */}

                      <img src={item.product.images[0]} alt=""  className='w-20 h-20'/>


                    </div>
                    <div>
                      <p className='text-[16px]'>{item.product.productName}</p>
                    </div>
                  </div>
                  <div className='w-[25%] text-center flex justify-center items-center'>
                    <p>&#8377; {item.product.price}</p>

                  </div>
                  <div className='w-[25%] text-center flex justify-center  items-center gap-2'>
                    <button className='p-1 border border-black ' onClick={() => handleDecrease(item.product._id)}><FaMinus className='text-xs' /></button>
                    <p>{count}</p>
                    <button className='p-1 border border-black' onClick={() => handleIncrease(item.product._id)} ><FaPlus className='text-xs'/></button>


                  </div>
                  <div className='w-[25%] text-center flex justify-evenly   items-center  '>
                    <p className=''>&#8377; {(price*count)}</p>
                    <button className='text-sm  ' onClick={() => dispatch(deleteProduct(item.product._id))}><IoTrashOutline /></button>

                  </div>

                </div>

                <div className='flex lg:hidden bg-gray-200 rounded-md mb-4 px-1 py-3'>
                  <div className='h-24 w-[30%] p-1'>
                    <img src={item.product.images[0]} alt="" className='w-full h-full' />
                  </div>
                  <div className="w-[50%] pl-10">
                    <p className='text-base'>&#8377; {item.product.price}</p>
                    <p className="">{item.product.productName}</p>
                    <div className="flex mt-4">
                      <div className='text-center flex justify-center  items-center gap-2'>
                      <button className='p-1 border border-black ' onClick={() => handleDecrease(item.product._id)}><FaMinus className='text-xs' /></button>
                    <p>{count}</p>
                    <button className='p-1 border border-black' onClick={() => handleIncrease(item.product._id)} ><FaPlus className='text-xs'/></button>

                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] flex justify-center items-center">
                  <button className='text-2xl  ' onClick={() => dispatch(deleteProduct(item.product._id))}><IoTrashOutline /></button>

                  </div>

                </div>
                  </div>
                )
})
            }


        </div>
        <div className='lg:mt-8 mt-4 lg:w-[28%] lg:px-7'>
          <div className="flex justify-between text-black lg:text-gray-400 text-[16px] font-semibold">
            <div className=''>Total (VAT included)</div>
          <div className='text-base'>
          &#8377; {total}
          </div>
          </div>

          <button className='w-full rounded-md py-4 text-lg lg:text-base alg:py-6 bg-[#C69E70] text-white font-semibold mt-5 shadow-xl'>Proceed to checkout</button>

        </div>
      </div>
      </div>
  )
}


export default Cart