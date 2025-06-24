import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";

const Main4 = () => {
    const products = "http://localhost:3000/productsMain4"
    const basket = "http://localhost:3000/Basket"
    const [productsD, setProductsD] = useState([])
    useEffect(()=>{
    axios.get(products).then(({data})=>{
        setProductsD(data)        
    })
    console.log(products);    
    },[])

    const likeChange = ({id, liked})=>{
        console.log(products + "/" +id);
        axios.patch(products + "/" +id, { liked: !liked })
    }

    const addBasket = (id) =>{
        console.log(products+"/"+id);
        axios.get(products+"/"+id).then(({data})=>{
            // setBasketD(data)
            const newProduct = {
                ...data,
                piece:1,
            }
            console.log(data)
            axios.post(basket, newProduct)
        })
    }
    
    return (
        <div className='w-full mt-16'>
            <div className='w-[80%] h-fit m-auto flex flex-col'>
                <div className='flex gap-7'>
                    <a href='#' className='text-[18px] text-[#000000] font-medium'>New Arrival</a>
                    <a href='#' className='text-[18px] text-[#8B8B8B] font-medium'>Bestseller</a>
                    <a href='#' classNa me='text-[18px] text-[#8B8B8B] font-medium'>Featured Products</a>
                </div> 
                <div className='grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                    {productsD.map(({id,name,price,liked,image})=>{
                        return(
                            <div key={id} className='bg-[#F6F6F6] rounded-[9px] h-[430px] p-5'>
                                <div className='flex justify-end' onClick={() => likeChange({id, liked})}>
                                    {liked? <FcLike size={30}/>:<IoIosHeartEmpty size={30} />}
                                </div>
                                <div className='flex justify-center'>
                                    <img src={image}/>
                                </div>
                                <p className='text-[16px] text-[#000000] font-medium'>{name}</p>
                                <p className='text-2xl text-[#000000] font-semibold text-center'>{price}</p>
                                <div className='flex justify-center'>
                                    <button onClick={() => addBasket(id)} className='bg-[#000000] rounded-[8px] w-28 h-12 text-[14px] cursor-pointer text-[#FFFFFF]'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main4
