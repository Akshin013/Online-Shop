import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../../../Pages/Home';
import Contact from '../../../Pages/Contact';
import About from '../../../Pages/About';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
const Header = () => {
  const [burgerMenuD, setburgerMenuD] = useState(false)
  const burgerMenuChange = ()=>{
    setburgerMenuD(!burgerMenuD)
    console.log(burgerMenuD);
    
  }
  return (
    <div className='w-full h-fit flex relative'>
      <div className='p-4 flex w-full justify-between  m-auto lg:w-[80%] sm:w-full relative '>
        <div className={`flex items-center ${burgerMenuD ? 'hidden': 'flex'}`}>
          <img className='' src='Images/Logo.png'/>
        </div>

        <div className={`relative ${burgerMenuD ? 'hidden': 'flex'}`}>
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
            </svg>
          </span>
          <input className="pl-10 py-2 text-[14px] rounded w-full bg-[#F5F5F5]" type='text' placeholder='Search'/>
        </div>

        <div className={` hidden lg:gap-13 md:gap-7 md:text-lg  sm:text-[19px]  sm:gap-5  sm:flex ${burgerMenuD ? 'hidden': 'flex'}`}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Blog">Blog</Link>
        </div>
        <div className={`hidden gap-6 md:flex`}>
                <CiHeart  size={35}/>
                <Link to="/Basket">
                <SlBasket size={35}/>
                </Link>
                <CiUser   size={35}/>
              </div>
        <div className={`bg-gray-500 abcolute ${burgerMenuD ? 'bg-amber-400 h-1/2 abcolute  w-screen' : 'hidden'}`}>
          <div className='flex justify-end ' onClick={burgerMenuChange}><GiHamburgerMenu size={22}/></div>

          <div className='flex p-3'>            
            <div className=' flex  p-4 md:hidden'>
              <div className='flex  flex-col p-3 gap-3'>
                <Link className=' text-lg' to="/">Home</Link>
                <Link className=' text-lg' to="/About">About</Link>
                <Link className=' text-lg' to="/Contact">Contact Us</Link>
                <Link className=' text-lg' to="/Blog">Blog</Link>
              </div>
              <div className='flex gap-6 flex-col'>
                <CiHeart  size={35}/>
                <Link to="/Basket">
                <SlBasket size={35}/>
                </Link>
                <CiUser   size={35}/>
              </div>
        </div>
          <div className='flex gap-5 flex-col mt-4'>
            <FaFacebookF className='cursor-pointer' color='white' size={25}/>
            <FaTiktok className='cursor-pointer' color='white' size={25}/>
            <FaInstagram className='cursor-pointer' color='white' size={25}/>
            <FaTwitter className='cursor-pointer' color='white' size={25}/>
          </div>
        </div>
      </div>

        <div className={`flex bg-amber-400 sm:bg-blue-800 md:hidden ${burgerMenuD ? 'hidden': 'flex'}`} onClick={burgerMenuChange}><GiHamburgerMenu size={22}/></div>
      </div>
    </div>


      // <div className='w-full h-20'>
      //   <div className='h-full flex justify-between p-4 w-[80%] m-auto'>
      //     <div className='flex items-center'>
      //       <img className='' src='Images/Logo.png'/>
      //     </div>
      //     <div class="relative">
      //       <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      //         <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      //           <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
      //         </svg>
      //       </span>
      //       <input className="pl-10 py-2 text-[14px] rounded w-full bg-[#F5F5F5]" type='text' placeholder='Search'/>
      //     </div>        
          
      //     <div className='flex  text-lg items-center gap-16'>
      //       <Link to="/">Home</Link>
      //       <Link to="/About">About</Link>
      //       <Link to="/Contact">Contact Us</Link>
      //       <Link to="/Blog">Blog</Link>
      //     </div>
          
      //     <div className='flex gap-11'>
      //       <CiHeart  size={35}/>
      //       <Link to="/Basket">
      //       <SlBasket size={35}/>
      //       </Link>
      //       <CiUser   size={35}/>
      //     </div>
      //   </div>
      // </div>
  )
}

export default Header
