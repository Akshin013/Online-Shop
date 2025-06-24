import React, { useEffect, useState } from 'react'
import Header from '../../Components/Common/Header'
import Footer from '../../Components/Common/Footer'
import { MdLocalShipping, MdTextRotationAngleup } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";  
import { MdOutlinePayment } from "react-icons/md";
import { UNSAFE_useFogOFWarDiscovery } from 'react-router-dom';
import axios from 'axios';
import { FcSimCardChip } from "react-icons/fc";
import { ImConnection } from "react-icons/im";
import { SiMastercard } from "react-icons/si";
import { Link } from 'react-router-dom';
const Step3 = () => {
    const [basketD, setBasketD] = useState([])
    const basket = "http://localhost:3000/Basket"
    const [totalPriceD, setTotalPriceD] = useState('')
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    useEffect(()=>{
        axios.get(basket).then(({data})=>{
            setBasketD(data)
        })

    },[])

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

    // console.log(basketD);
    // console.log(totalPriceD);

  return (
    <div>
        <Header/>
        <div className='py-[110px] px-[160px]'>
            <div className='h-full w-full flex justify-between py-16'> 
                <div className='flex items-center gap-3'>
                                <IoLocationSharp color='#B2B2B2' size={34}/>
                                <div>
                                    <p className='text-[19px] text-[#B2B2B2] font-medium'>Step 1</p>
                                    <p className='text-[19px] text-[#B2B2B2] font-medium'>Address</p>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-3'>
                                <MdLocalShipping color='#B2B2B2' size={34}/> 
                                <div>
                                    <p className='text-[19px] text-[#B2B2B2] font-medium'>Step 2</p>
                                    <p className='text-[19px] text-[#B2B2B2] font-medium'>Shipping</p>
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-3'>
                                <MdOutlinePayment color='#000000' size={34}/>
                                <div>
                                    <p className='text-[19px] text-[#000000] font-medium'>Step 3</p>
                                    <p className='text-[19px] text-[#000000] font-medium'>Payment</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-redd-800 grid grid-cols-2 gap-24'>
                            <div className='py-8 px-6 flex flex-col gap-6 rounded-[10px] border border-[#EBEBEB]'>
                                <p className='text-2xl text-[#000000] font-medium'>Summary</p>
                                <div className='flex flex-col gap-5'>
                                    {basketD.map(({id,name,price,image})=>{
                                        return(
                                            <div key={id} className='bg-[#F6F6F6] rounded-xl p-4 flex justify-between'>
                                                <div className='flex gap-4'>
                                                    <img className='w-10 h-10' src={image}/>
                                                    <p className='text-[16px] text-[#000000] '>{name}</p>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#000000] font-bold'>{price}</p>
                                                </div>
                                                
                                            </div>
                                        )
                                    })}
                    <div className='flex justify-between'>
                        <p className='text-[16px] text-[#000000] font-medium'>Subtotal</p>
                        <p className='text-[16px] text-[#000000] font-medium'>${totalPriceD}</p>
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
                </div>
            </div>

{/* CARD DATA    */}
            <div className=''>
                <p className='text-2xl text-[#000000] font-bold'>Payment</p>
                <div className='flex gap-14 mt-5'>
                    <a className='text-[14px] text-[#000000]'>Credit Card</a>
                    <a className='text-[14px] text-[#717171]'>PayPal</a>
                    <a className='text-[14px] text-[#717171]'>PayPal Credit</a>
                </div>
                <div className='bg-[#000000] w-80 h-48 rounded-2xl p-3.5 mt-10'>
                    <div className='flex items-center'>
                        <FcSimCardChip size={40}/>
                        <ImConnection size={25} color='white' className="rotate-90" />
                    </div>
                    <div>
                        <div className='bg-[#979797] h-7 rounded-md'>
                            <p className='text-xl text-white'>{number}</p>
                        </div>
                        <p className='text-white'>Name:</p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <p className='text-white'>Cardholder</p>
                        <SiMastercard color='white' size={36}/>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-12'>
                    <div className='flex flex-col gap-4'>
                        <input className='rounded-lg border border-[#CECECE] h-12 text-sm text-[#979797] font-normal p-3.5' placeholder='Cardholder Name'/>
                        <input onChange={(e) => setNumber(e.target.value)} className='rounded-lg border border-[#CECECE] h-12 text-sm text-[#979797] font-normal p-3.5' type='number' placeholder='Card Number'/>
                    </div>
                    <div className='flex gap-4'>
                        <input className='rounded-lg border border-[#CECECE] w-1/2 h-12 text-sm text-[#979797] font-normal p-3.5' placeholder='Exp.Date'/>
                        <input className='rounded-lg border border-[#CECECE] w-1/2 h-12 text-sm text-[#979797] font-normal p-3.5' placeholder='CVV'/>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-13'>
                    <input className='h-4 w-4' type='checkbox'/>
                    <p className='text-base text-[#000000] font-medium'>Same as billing address</p>
                </div>
                 <div className='flex justify-end gap-6 mt-16'>
                <Link to="/Step2">
                    <button className='h-16 w-52 rounded-lg cursor-pointer  bg-[#FFFFFF] text-[#000000] border border-[#000000]'>Back</button>
                </Link>
                <Link to="/Step2">
                    <button className='h-16 w-52 rounded-lg cursor-pointer  bg-[#000000] text-[#FFFFFF]'>Pay</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Step3
