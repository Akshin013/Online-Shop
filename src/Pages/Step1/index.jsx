import React, { useEffect, useState } from 'react'
import Header from '../../Components/Common/Header'
import { MdOutlinePayment } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import Footer from '../../Components/Common/Footer';
import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
    
const Step1 = () => {
    const [addressesD, setAddressesD] = useState([])
    const addresses = "http://localhost:3000/addresses"
    useEffect(()=>{
        axios.get(addresses).then(({data})=>{
            setAddressesD(data)
        })
    },[])
    console.log(addressesD);
    
    const selectChange = (id, selected)=>{
        console.log(addresses + "/" +id);
        console.log(id);
        console.log(selected);
        axios.patch(addresses + "/" +id, { selected: !selected })
    }

    // ФУНКЦИЯ ДОБАВЛЕНИЯ АДРЕСА В ДАТА БАЗА ИНПУТОМ ИЗ   ADD ADDRESS

    const addNewAddresseF =()=>{{
        // console.log("dfsdfsdfsdf");
        
        return(
            <input type='text'/>
        )
    }}

  return (
    <div className=''>
        <Header/>
        
        <div className='w-full h-fit py-[110px] px-[160px]'>
            <div className='h-full w-full flex justify-between py-16'>
                <div className='flex items-center gap-3'>
                    <IoLocationSharp color='#000000' size={34}/>
                    <div>
                        <p className='text-[19px] text-[#000000] font-medium'>Step 1</p>
                        <p className='text-[19px] text-[#000000] font-medium'>Address</p>
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
                    <MdOutlinePayment color='#B2B2B2' size={34}/>
                    <div>
                        <p className='text-[19px] text-[#B2B2B2] font-medium'>Step 3</p>
                        <p className='text-[19px] text-[#B2B2B2] font-medium'>Payment</p>
                    </div>
                </div>
            </div>

            <div className=''>
                <p className='text-2xl text-[#17183B] font-semibold'>Select Address</p>
                <div className=''>
                    {addressesD.map(({id,selected, category, street, address, phone})=>{
                        return(
                            <div key={id} className='flex justify-between p-6 bg-[#F6F6F6] rounded-lg'>
                                <div className='flex gap-4 '>
                                    <div className='h-7 w-7' onClick={()=>selectChange(id,selected)}>
                                        {selected? <MdOutlineRadioButtonUnchecked size={28}/>: <MdOutlineRadioButtonChecked size={28}/>}
                                    </div>
                                    <div className=' flex flex-col gap-2'>
                                        <div className='flex gap-4'>
                                            <p className='text-[18px] text-[#17183B] font-normal'>{street}</p>
                                            <div className='bg-[#000000] h-6 rounded-sm px-2 py-1 text-center'>
                                                <p className='text-[12px] text-[#FFFFFF] text-center'>{category.toUpperCase()}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[16px] text-[#17183B] font-normal'>{address}</p>
                                        </div>
                                        <div>
                                            <p className='text-[16px] text-[#17183B] font-normal'>{phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-red-500 flex gap-5 h-fit'>  
                                    <MdEdit color='#000000' size={24}/>
                                    <IoMdClose color='#000000' size={24}/>
                                </div>
                            
                            </div>

                        )
                    })}
                    <div onClick={addNewAddresseF} className='p-3 w-[140px] rounded-lg cursor-pointer m-auto flex flex-col items-center bg-[#F6F6F6]'>
                        <MdAddCircle size={30}/>
                        <p className='text-[14px] text-[#262626] font-normal'>Add New Address</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end gap-6'>
                <Link to="/Basket">
                    <button className='h-16 w-52 rounded-lg cursor-pointer  bg-[#FFFFFF] text-[#000000] border border-[#000000]'>Back</button>
                </Link>
                <Link to="/Step2">
                    <button className='h-16 w-52 rounded-lg cursor-pointer  bg-[#000000] text-[#FFFFFF]'>Next</button>
                </Link>
            </div>
        </div>
       
    </div>
  )
}

export default Step1
