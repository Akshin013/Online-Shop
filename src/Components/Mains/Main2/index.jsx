import React from 'react'

const Main2 = () => {
  // bg-red-700 w-full h-fit flex-col md:flex md:bg-amber-300
  // flex flex-col w-1/2
  return (
    <div className='sm:bg-blue-500 flex flex-col md:bg-green-600 lg:bg-amber-800 lg:flex'>
      <div className='w-full flex flex-col md:w-full'>
        <div className='bg-[#FFFFFF] flex'>
          <div>
            <img src='Images/ps.png'/>
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <p className='text-5xl text-[#000000]'>Playstation 5</p>
            <p className='text-[14px] text-[#909090] font-medium'>Incredibly powerful CPUs, GPUs, and an SSD with <br/>integrated I/O will redefine your PlayStation <br/>experience.</p>            
          </div>
          <div>

          </div>
        </div>

        <div className='flex'>
          <div className='bg-[#EDEDED] flex w-1/2 gap-5'>
            <div className='md:flex flex-col justify-center'>            
              <img src='Images/airPods.png'/>
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <p className='text-3xl #000000 font-light'>Apple <br/>AirPods <br/><span className='font-medium'>Max</span> </p>
              <p className='text-[14px] text-[#909090] font-medium'>Computational audio. <br/>Listen, it's powerful</p>
            </div>
          </div>



          <div className='bg-[#353535] w-1/2 flex gap-5'>
            <div className='flex flex-col justify-center'>
              <img src='Images/vision.png'/>
            </div>
        
            <div className='flex flex-col justify-center gap-4 fel'>
              <p className='text-3xl text-[#FFFFFF] font-light'>Apple <br/>Vision <span className='font-medium'>Pro</span> </p>
              <p className='text-[14px] text-[#909090] font-medium'>An immersive way to <br/>experience <br/>entertainment</p>
            </div>
          </div>
        </div>
      </div>
      
      



      <div className=' bg-[#EDEDED] flex md:w-full justify-between'>
        <div className='p-14 flex flex-col justify-center gap-4 fel'> 
          <p className='text-6xl text-[#000000] font-thin'>Macbook <br/> <span className='font-medium'>Air</span></p>
          <p className='text-[14px] text-[#909090] '>The new 15‑inch MacBook Air makes room for more <br/>of what you love with a spacious Liquid Retina <br/>display.</p>
          <button className='bg-[#EDEDED] h-14 w-48 rounded-[6px] border-[#000000] text-[#000000] border-[1px] cursor-pointer'>Shop Now</button>
        </div>
        
        
        <div>
          <img src='Images/MacPro.png'/>
        </div>
      </div>
    </div>
  )
}

export default Main2
