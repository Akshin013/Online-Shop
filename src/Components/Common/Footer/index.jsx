import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
const Footer = () => {
  return (
    <div className='sm:flex sm:flex-col bg-red-900 sm:bg-[#000000] w-full h-fit sm:py-[104px] sm:px-[160px]'>
          <div className='h-fit m-auto flex flex-wrap justify-between'>
            <div className=''>
              <img src='Images/LogoFooter.png'/>
              <p className='mt-6 text-[14px] text-[#CFCFCF]'>We are a residential interior design firm located in <br/>Portland. Our boutique-studio offers more than</p>
            </div>

            <div className='flex flex-col gap-4'>
                <a className='text-[16px] text-[#FFFFFF] font-semibold' href='#'>Services</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Bonus program</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Gift cards</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Credit and payment</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Service contracts</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Non-cash account</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Payment</a>
            </div>

            <div className='flex flex-col gap-4'>
                <a className='text-[16px] text-[#FFFFFF] font-semibold' href='#'>Assistance to the buyer</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Find an order</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Terms of delivery</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Exchange and return of goods</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Guarantee</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Frequently asked questions</a>
                  <a className='text-[14px] text-[#CFCFCF] font-normal' href='#'>Terms of use of the site</a>
            </div>      
          </div>
          <div className='flex gap-10'>
            <FaFacebookF className='cursor-pointer' color='white' size={28}/>
            <FaTiktok className='cursor-pointer' color='white' size={28}/>
            <FaInstagram className='cursor-pointer' color='white' size={28}/>
            <FaTwitter className='cursor-pointer' color='white' size={28}/>
          </div>
    </div>
  )
}

export default Footer
