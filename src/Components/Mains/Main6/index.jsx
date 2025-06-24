import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";

const Main6 = () => {
  const [discountD, setDiscountD] = useState([])
  const discountProducts= "http://localhost:3000/discountProducts"
  useEffect(()=>{
    axios.get(discountProducts).then(({data})=>{
      console.log(data);
      setDiscountD(data)
    })

  },[])
  const likeChange = ({id, liked})=>{
        // console.log(products + "/" +id);
        axios.patch(discountProducts + "/" +id, { liked: !liked })
    }
  return (
    <div className= 'w-[80%] m-auto py-[80px] '>
      <div className='m-auto'>
        <p className='text-2xl text-[#000000] font-medium'>Discounts up to -50%</p>
      </div>
      <div className='grid gap-4 grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {discountD.map(({id,name,price,liked,image,color})=>{
          // console.log(image);
          return(            
             <div key={id} className='bg-[#EAEAEA] rounded-[9px] h-fit p-5'>
              <div className='flex justify-end' onClick={() => likeChange({id, liked})}>
                      {liked? <FcLike size={30}/>:<IoIosHeartEmpty size={30} />}
                  </div>
                  <div className='flex justify-center'>
                      <img src={image}/>
                  </div>
                  <p className='text-[16px] mt-5 text-[#000000] font-medium'>{name}</p>
                  <p className='text-2xl mt-2 text-[#000000] font-semibold text-center'>{price}</p>
                  <div className='flex justify-center'>
                      <button className='bg-[#000000] mt-5 rounded-[8px] w-28 h-12 text-[14px] cursor-pointer text-[#FFFFFF]'>
                          Buy Now
                      </button>
                  </div>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main6
