import React, { useEffect, useState } from 'react'
import Header from '../../Components/Common/Header'
import { MdOutlinePayment } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";  
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Footer from '../../Components/Common/Footer';
const Step2 = () => {
    const [shippingMethodD, setShippingMethodD] = useState([])
// ПОДКЛЮЧИТЬ ДАТА ПОЛУЧЕНИЯ И ВЫВЕСТИ 
    const shippingMethod = "http://localhost:3000/ShippingMethod"
    useEffect(()=>{
        axios.get(shippingMethod).then(({data})=>{
            setShippingMethodD(data)
        })
    },[])
    console.log(shippingMethodD);
    
    const selectChange = (id, selected)=>{
        // console.log(addresses + "/" +id);
        // console.log(id);
        // console.log(selected);
        axios.patch(shippingMethod + "/" +id, { selected: !selected })
    }

  return (
    <div className=''>
      <Header/>
      <div className='w-full h-fit py-[110px] px-[160px]'>
            <div className='h-full w-full flex justify-between py-16'> 
                <div className='flex items-center gap-3'>
                    <IoLocationSharp color='#B2B2B2' size={34}/>
                    <div>
                        <p className='text-[19px] text-[#B2B2B2] font-medium'>Step 1</p>
                        <p className='text-[19px] text-[#B2B2B2] font-medium'>Address</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-3'>
                    <MdLocalShipping color='#000000' size={34}/> 
                    <div>
                        <p className='text-[19px] text-[#000000] font-medium'>Step 2</p>
                        <p className='text-[19px] text-[#000000] font-medium'>Shipping</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-3'>
                    <MdOutlinePayment color='#B2B2B2' size={34}/>
                    <div>
                        <p className='text-[19px] text-[#B2B2B2] font-medium'>Step 3</p>
                        <p className='text-[19px] text-[#B2B2B2] font-medium'>Payment</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 mt-12'>
                <p className='text-2xl text-[#17183B] font-semibold'>Shipment Method</p>
                {shippingMethodD.map(({id,selected, price, type, date})=>{
                    return(
                        <div className='flex justify-between p-6 rounded-xl  border border-[#D1D1D8]'>
                            <div className='flex gap-2.5'>
                                <div className='h-7 w-7' onClick={()=>selectChange(id,selected)}>
                                    {selected? <MdOutlineRadioButtonChecked size={28}/>: <MdOutlineRadioButtonUnchecked size={28}/>}
                                </div>
                                <p className={`${selected? 'text-lg text-[#000000] font-medium':'text-lg text-[#A2A3B1] font-medium' }`}>{price}</p>
                                <p className={`${selected? 'text-lg text-[#17183B] font-normal':'text-lg text-[#A2A3B1] font-medium' }`}>{type}</p>
                            </div>
                            <div>
                                <p className={`${selected? 'text-lg text-[#17183B] font-medium':'text-lg text-[#A2A3B1] font-medium' }`}>{date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='flex justify-end gap-6'>
                <Link to="/Step1">
                    <button className='h-16 w-52 rounded-lg cursor-pointer  bg-[#FFFFFF] text-[#000000] border border-[#000000]'>Back</button>
                </Link>
                <Link to="/Step3">
                    <button className='h-16 w-52 rounded-lg cursor-pointer  bg-[#000000] text-[#FFFFFF]'>Next</button>
                </Link>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Step2
