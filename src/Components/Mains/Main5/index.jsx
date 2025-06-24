import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Main5 = () => {
  const products = "http://localhost:3000/main5Products"
  const [productsD, setProductsD] = useState([])
  useEffect(()=>{
    axios.get(products).then(({data})=>{
      setProductsD(data)
    })
  },[])
  return (
    <div className='w-full mt-18'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {productsD.map(({id,name,image,title,color})=>{
              return(
                <div className='p-8 bg-[#F9F9F9]' key={id}>
                    <div className='h-1/2 flex justify-center'>
                      <img className='h-full' src={image}/>
                    </div>
                    <p className='text-3xl text-[#000000] font-light  '>{name}</p>
                    <p className='text-[14px] mt-14 text-[#909090] font-medium'>{title}</p>
                    <div className='flex justify-center'>
                      <button className='bg-[#EDEDED] mt-15 h-14 w-48 rounded-[6px] border-[#000000] text-[#000000] border-[1px] cursor-pointer'>Shop Now</button>
                    </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Main5
