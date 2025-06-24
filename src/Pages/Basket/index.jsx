import React, { useEffect, useState } from 'react'
import Header from '../../Components/Common/Header'
import Footer from '../../Components/Common/Footer'
import axios from 'axios'
import { RxCross1 } from "react-icons/rx";
import { Link, Routes } from 'react-router-dom'
const Basket = () => {
    const [basketD, setBasketD] = useState([])
    const basket = "http://localhost:3000/Basket"
    const [totalPriceD, setTotalPriceD] = useState('')
    useEffect(()=>{
        axios.get(basket).then(({data})=>{
            setBasketD(data)
        })
    },[])
    
    const pieceCounterPlus =(id,piece)=>{
        let a = piece
        a++
        axios.patch(basket+"/"+id, {
            piece:a
        })
    }
        const pieceCounterMinus =(id,piece)=>{
        let a = piece
        a--
        axios.patch(basket+"/"+id, {
            piece:a
        })
    }

    const deleteProduct = (id) =>{
        console.log("asfasfasfas");
        axios.delete(basket+"/"+id)
    }

    const TotalPrice = () => {
      const total = basketD.reduce((sum, item) => {
        const numericPrice = parseFloat(item.price.replace('$', ''))
        // console.log(total);
        console.log(numericPrice);
        return sum + numericPrice
      }, 0)
      console.log(total);
      setTotalPriceD(total)
      return (
        <div className="text-xl font-semibold">
          Total Price: ${total}
        </div>
      )
    }

  return (
    <div>
        <Header/>
        <div className='w-full h-fit py-[110px] px-[160px] grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div className=''>
                <div className='grid grid-cols-1 h-full'>
                    <div>
                        <p className='text-2xl text-[#000000] font-semibold'>Shopping Cart</p>
                    </div>
                    {basketD.map(({id,name,price,liked,image,piece})=>{
                    
                    return(
                        <div key={id} className='mt-6'>

                            <div key={id} className='flex items-center justify-between '>
                                <div className=''>
                                    <img src={image}/>
                                </div>
                                <div className='flex flex-col w-[280px]'>
                                    <p className='text-[16px] text-[#000000] font-medium'>{name}</p>
                                    <p className='text-[14px] text-[#000000] font-normal'>#{id}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <button className='text-3xl cursor-pointer' onClick={()=>pieceCounterMinus(id, piece)}>-</button>
                                        <div className='flex text-center'>
                                            <p className='text-[20px] w-10 text-[#000000] font-medium'>{piece}</p>
                                        </div>
                                    <button className='text-3xl cursor-pointer' onClick={()=>pieceCounterPlus(id, piece)}>+</button>
                                </div>
                                <div className='w-'>
                                    <p className='text-[20px] text-[#000000] font-medium'>{price}</p>
                                </div>
                                <div className='cursor-pointer'>
                                    <RxCross1 size={24} onClick={()=>deleteProduct(id)}/>
                                </div>
                                <hr className="h-4 bg-black border-0" />
                            </div>
                        <hr className="w-full h-[1px] bg-[#9F9F9F] border-none my-4" />
                        </div>
                        )
                    })}
                </div>
            </div>

                <div className='rounded-[10px] border-[1px] border-[#EBEBEB] py-[56px] px-[54px] flex flex-col items-center gap-5 xl:p-55'>
                <p className='text-[20px] text-[#111111] font-bold'>Order Summary</p>
                <div className='flex flex-col gap-7'>
                    <div>
                        <p className='text-[14px] text-[#545454] font-medium'>Discount code / Promo code</p>
                        <input className='p-4 h-14 w-md text-[#979797] bg-[#FFFFFF] border-[#9F9F9F] border-[1px] rounded-[7px]' type='text' placeholder='code'/>
                    </div>
                    <div>
                        <p className='text-[14px] text-[#545454] font-medium'>Discount code / Promo code</p>
                        <input className='p-4 h-14 w-md text-[#979797] bg-[#FFFFFF] border-[#9F9F9F] border-[1px] rounded-[7px]' type='text' placeholder='Enter Card Number'/>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-[16px] text-[#000000] font-medium'>Subtotal</p>
                        <p className='text-[16px] text-[#000000] font-medium'>${totalPriceD ? totalPriceD : '-'}</p>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-[16px] text-[#545454] font-normal'>Estimated Tax</p>
                            <p className='text-[16px] text-[#000000] font-medium'>$50</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[16px] text-[#545454] font-normal'>Estimated shipping & Handling</p>
                            <p className='text-[16px] text-[#000000] font-medium'>$29</p>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <p className='text-[16px] text-[#000000] font-medium'>Total</p>
                        <p className='text-[16px] text-[#000000] font-medium'>${totalPriceD ? totalPriceD  + 79 : '-'}</p>
                    </div>
                    <div>
                        <Link to="/Step1">
                        <button onClick={TotalPrice} className='text-[16px] text-[#FFFFFF] cursor-pointer h-14 w-md bg-[#000000] rounded-md'>
                            Checkout
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
        <Footer/>
    </div>
  )
}

export default Basket
