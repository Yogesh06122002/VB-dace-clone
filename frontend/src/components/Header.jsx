import React from 'react'
import { FiUser } from "react-icons/fi";
import { VscHeart } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import '../index.css'
import { Link ,useLocation} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";
import { MdArrowRight } from "react-icons/md";



function Header() {


  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  
  }, [location])

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [iskitchenOpen, setisKitchenOpen] = useState(false);
  

  
  return (
    <div>
      <div className='bg-[#BA906A] text-white text-center text-sm p-1'>
          QUALITY GUARANTEED | SHIPPING WORLDWIDE
      </div>
      <div className="flex p-2">

      <div className=' w-[57%] flex justify-end'>
        <img src="https://cdn.shopify.com/s/files/1/0616/7222/6982/files/logo.png" alt="" className='w-44 h-auto'/>
      </div>
      <div className="flex w-[43%] gap-4 justify-end pr-20">
        <button className="flex items-center gap-1 ">
        <FiUser className='text-xl font-light'/>
        <p className='text-base font-normal'>Sign In</p>

        </button>
        <button className="flex items-center gap-1">
        <VscHeart className='text-xl'/>
        <p >My Orders</p>
        </button>
        <button className="flex items-center gap-1">
        <IoCartOutline className='text-xl' />
        <p>Cart</p>

        </button>
      </div>
      {/* hover:border-b-[3px] pb-1 border-[#BA906A] */}
      </div>
      <div className="flex   border-gray-200 border-[1px]">
        <div className='flex gap-5  ml-52 text-[16px] '>
          <Link to="/"><div className={`cursor-pointer  p-2  ${activeLink === '/' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'}`} >Home</div></Link>
          <div 
            className="relative cursor-pointer p-2 hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link to="/products" className='flex items-center gap-[2px] '>
              Products <span className='text-[13px] mt-1'><TiArrowSortedDown /></span>
            </Link>
            {isProductsOpen && (
              <div className="absolute left-0 top-full rounded-md w-40 bg-white border border-gray-200 shadow-lg">
                <ul className="text-black text-base">
                  <li className="px-5 py-2 hover:bg-gray-200" onMouseEnter={()=> setisKitchenOpen(true)} onMouseLeave={()=>setisKitchenOpen(false)}><Link to="/" className='flex items-center justify-between'>Kitchenware <span className='text-[18px] mt-1'><MdArrowRight /></span></Link>{iskitchenOpen && (
                    <div className='absolute left-full top-0 w-40 bg-white rounded-md border border-gray-200 shadow-lg'><ul className='text-black text-base'><li className='px-5 py-2 hover:bg-gray-200'><Link to="/">Accessories</Link></li></ul></div>
                  )}</li>
                  <li className="px-5 py-2 hover:bg-gray-200"><Link to="/">Tableware </Link></li>
                  <li className="px-5 py-2 hover:bg-gray-200"><Link to="/">Kitchen Tools</Link></li>
                  <li className="px-5 py-2 hover:bg-gray-200"><Link to="/">Kitchen Mates</Link></li>
                </ul>
              </div>
            )}
          </div>          
          <Link to="/about"><div className={`cursor-pointer  p-2 ${activeLink === '/about' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'} `}>About VB Dace</div></Link>
          <Link to="/contact"><div className={`cursor-pointer  p-2 ${activeLink === '/contact' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'}`}>Contact Us</div></Link>
          <Link to="/our"><div className={`cursor-pointer  p-2 ${activeLink === '/our' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'} `}>Our Experiance Centers</div></Link>
          <Link to="/shipping"><div className={`cursor-pointer  p-2 ${activeLink === '/shipping' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'} `}>Shipping & Returns</div></Link>
        </div>
        <div className="flex items-center ml-48   gap-1 text-gray-400">
          <IoSearchOutline className='text-2xl' />
          <p className='font-normal'>Search</p>

        </div>
      </div>
    </div>
  )
}

export default Header