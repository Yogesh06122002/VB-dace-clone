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
import { useSelector } from 'react-redux';
import { MdMenu,MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";




function Header() {

  const cart = useSelector(state => state.cart.cart);
  const [active, setActive] = useState(false);
  const [access, setAccess] = useState(false);


  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  
  }, [location])

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [iskitchenOpen, setisKitchenOpen] = useState(false);
  

  
  return (
    <div className=''>
      <div className='bg-[#BA906A] text-white text-center lg:text-sm text-xs p-2 lg:p-1'>
          QUALITY GUARANTEED | SHIPPING WORLDWIDE
      </div>
      <div className="flex justify-around p-2">

      <div className=' lg:w-[57%]  lg:flex lg:justify-end '>
        <Link to='/'><img src="https://cdn.shopify.com/s/files/1/0616/7222/6982/files/logo.png" alt="" className='w-[9rem] lg:w-44 lg:h-auto'/></Link>
      </div>
      <div className="lg:flex hidden w-[43%] gap-4   justify-end pr-14">
        <Link to='/login' className="flex items-center gap-1 ">
        <FiUser className='text-xl font-light'/>
        <p className='text-base font-normal'>Sign In</p>

        </Link>
        <Link to='/myorders' className="flex items-center gap-1">
        <VscHeart className='text-xl'/>
        <p >My Orders</p>
        </Link>
        <Link to='/cart' className="flex items-center gap-1">
        <IoCartOutline className='text-xl' />
        <p>Cart ({cart.length})</p>

        </Link>
      </div>
      <div className='lg:hidden flex items-center gap-5'>
        <Link to='/cart' className="flex items-center gap-1">
        <IoCartOutline className='text-2xl text-gray-600' />
        <p> ({cart.length})</p>
        </Link>
        <div onClick={()=> setActive(!active)} className='cursor-pointer relative'>
        { active ? <MdClose className='text-2xl'/> :<MdMenu className='text-2xl'/> }
        </div>
        

      </div>
        {active && (
        <div className='absolute lg:hidden  bg-white text-black   left-0 right-0  z-50   top-24 pt-5   '  >
          <div className='flex flex-col gap-2 pb-5  border-b mx-8 border-gray-200 'onClick={()=>setActive(!active)}>
          <Link to='/myorders'>My Orders</Link>
          <Link to='/cart'><p>My cart</p></Link>
          <Link to='/login'>Sign In</Link>
          </div>
          <div className='mx-8 mt-3'>
            <p className='text-[17px] font-medium'>Shop By Categories</p>
            <div className="flex flex-col mt-2 gap-2 ml-5" onClick={()=>setActive(!active)} >
              <Link to='/kitchenware' className='flex gap-1 items-center'><IoIosArrowForward onClick={() => {setAccess(!access)}} /> <p>Kitchenware </p>
              </Link>
              {
                access && (
                  <Link to='/accessories' className='ml-5 flex items-center' onClick={()=>setActive(!active)}> <IoIosArrowForward /> Accessories</Link>
                )
              }
              <Link to='tableware'className='flex gap-1 items-center' onClick={()=>setActive(!active)}><IoIosArrowForward /> Tableware</Link>
              <Link to='kitchentools'className='flex gap-1 items-center' onClick={()=>setActive(!active)}><IoIosArrowForward /> Kitchen Tools</Link>
              <Link to='kitchenmate'className='flex gap-1 items-center' onClick={()=>setActive(!active)}><IoIosArrowForward /> Kitchen Mate</Link>
              
            </div>
            <div className="mt-6 pb-10" onClick={()=>setActive(!active)}>
              <Link to='/products' className='text-[17px] font-medium'>All Products</Link>
              <div className="flex flex-col gap-2 mt-6 text-[17px] font-medium">
              <Link to='/about'>About VB Dace</Link>
              <Link to='/contact'>Contact Us</Link>
              <Link to='/our'>Our Experiance Centers</Link>
              </div>
            </div>
          </div>

        </div>
      )}
      {/* hover:border-b-[3px] pb-1 border-[#BA906A] */}
      </div>
     
      <div className=" lg:flex hidden   border-gray-200 border-[1px]">
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
                  <li className="px-5 py-2 hover:bg-gray-200" onMouseEnter={()=> setisKitchenOpen(true)} onMouseLeave={()=>setisKitchenOpen(false)}><Link to="/kitchenware" className='flex items-center justify-between'>Kitchenware <span className='text-[18px] mt-1'><MdArrowRight /></span></Link>{iskitchenOpen && (
                    <div className='absolute left-full top-0 w-40 bg-white rounded-md border border-gray-200 shadow-lg'><ul className='text-black text-base'><li className='px-5 py-2 hover:bg-gray-200'><Link to="/accessories">Accessories</Link></li></ul></div>
                  )}</li>
                  <li className="px-5 py-2 hover:bg-gray-200"><Link to="/tableware">Tableware </Link></li>
                  <li className="px-5 py-2 hover:bg-gray-200"><Link to="/kitchentools">Kitchen Tools</Link></li>
                  <li className="px-5 py-2 hover:bg-gray-200"><Link to="/kitchenmate">Kitchen Mates</Link></li>
                </ul>
              </div>
            )}
          </div>          
          <Link to="/about"><div className={`cursor-pointer  p-2 ${activeLink === '/about' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'} `}>About VB Dace</div></Link>
          <Link to="/contact"><div className={`cursor-pointer  p-2 ${activeLink === '/contact' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'}`}>Contact Us</div></Link>
          <Link to="/our"><div className={`cursor-pointer  p-2 ${activeLink === '/our' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'} `}>Our Experiance Centers</div></Link>
          <Link to="/shipping"><div className={`cursor-pointer  p-2 ${activeLink === '/shipping' ? 'underline underline-offset-8 decoration-[#BA906A] decoration-[3px]' : 'hover:underline decoration-[#BA906A] decoration-[3px] underline-offset-8'} `}>Shipping & Returns</div></Link>
        </div>
        <div className="flex items-center ml-44   gap-1 text-gray-400">
          <IoSearchOutline className='text-2xl' />
          <p className='font-normal'>Search</p>

        </div>
      </div>
    </div>
  )
}

export default Header