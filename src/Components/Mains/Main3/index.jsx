import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"; 
import { IoWatchOutline } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiHeadphones } from "react-icons/ci";
import { BiJoystickAlt } from "react-icons/bi";

const Main3 = () => {
  return (
    <div className='w-full mt-12'>
      <div className='w-[80%] h-fit m-auto flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <div>
                <p className='text-[#000000] text-2xl font-medium'>Browse By Category</p>
            </div>
            <div className='flex'>
                <IoIosArrowBack className='cursor-pointer' size={38}/> 
                <IoIosArrowForward className='cursor-pointer' size={38}/>
            </div>
        </div>
        <div className='mt-7 grid grid-cols-1 sm:grid-cols-2 gap-11 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            <div className='rounded-2xl cursor-pointer bg-[#EDEDED] flex flex-col items-center justify-center p-7 gap-4'>
                <HiOutlineDevicePhoneMobile size={68}/>
                <p>Phones</p>
            </div>

            <div className='rounded-2xl cursor-pointer bg-[#EDEDED] flex flex-col items-center justify-center p-7 gap-4'>
                <IoWatchOutline size={68}/>
                <p>Smart Watches</p>
            </div>

            <div className='rounded-2xl cursor-pointer bg-[#EDEDED] flex flex-col items-center justify-center p-7 gap-4'>
                <MdOutlinePhotoCamera size={68}/>
                <p>Cameras</p>
            </div>

            <div className='rounded-2xl cursor-pointer bg-[#EDEDED] flex flex-col items-center justify-center p-7 gap-4'>
                <CiHeadphones size={68}/>
                <p>Headphones</p>
            </div>

            <div className='rounded-2xl cursor-pointer bg-[#EDEDED] flex flex-col items-center justify-center p-7 gap-4'>
                <HiOutlineComputerDesktop size={68}/>
                <p>Computers</p>
            </div>

            <div className='rounded-2xl cursor-pointer bg-[#EDEDED] flex flex-col items-center justify-center p-7 gap-4'>
                <BiJoystickAlt size={68}/>
                <p>Gaming</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main3
