import React from 'react'

const Main1 = () => {
  return (
    <div className='bg-[#211C24] w-full h-fit'>
      <div className='w-[80%] m-auto flex justify-between '>
        <div className='flex flex-col justify-center gap-4'>
            <p className='text-gray-500  text-2xl font-semibold'>Pro.Beyond.</p>
            <h1 className='text-[#FFFFFF] text-8xl font-thin'>IPhone 14 Pro</h1>
            <p className='text-gray-500 text-[18px] font-medium'>Created to change everything for the better. For everyone</p>
            <button className='bg-[#211C24] text-white h-14 w-48 rounded-[6px] border-[1px] cursor-pointer'> 
                Shop Now
            </button>
        </div>
        
        <div className='hidden md:flex'>
            <img src='public/Images/main1-phone-img.png'/>
        </div>
      </div>
    </div>
   
   
   
   
   
    // <div className='bg-[#211C24] w-full h-fit'>
    //   <div className='w-[80%] m-auto flex justify-between'>
    //     <div className='flex flex-col justify-center gap-4'>
    //         <p className='text-gray-500  text-2xl font-semibold'>Pro.Beyond.</p>
    //         <h1 className='text-[#FFFFFF] text-8xl font-thin'>IPhone 14 Pro</h1>
    //         <p className='text-gray-500 text-[18px] font-medium'>Created to change everything for the better. For everyone</p>
    //         <button className='bg-[#211C24] text-white h-14 w-48 rounded-[6px] border-[1px] cursor-pointer'> 
    //             Shop Now
    //         </button>
    //     </div>
        
    //     <div>
    //         <img src='public/Images/main1-phone-img.png'/>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Main1
