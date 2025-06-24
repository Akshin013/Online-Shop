import React, { useEffect, useState } from 'react'
import Header from '../../Components/Common/Header'
import axios from 'axios';
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from '../../Components/Common/Footer';

const Catalog = () => {
    const url = "http://localhost:8080"
    const [catalog, setCatalog] = useState([])
    const [brandMenu, setBrandMenu] = useState(true)
    const [brands, setBrands] = useState([])
    const [filterMenu, setFilterMenu] = useState(true)
    const [priceMenu, setPriceMenu] = useState(false)
    const [memory, setMemory] = useState([])
    const [memoryMenu, setMemoryMenu] = useState(true)
    
    // Выдает све данные с сервера 
    useEffect(()=>{
        axios.get(url+'/PhoneCatalog').then(({data})=>{
            setCatalog(data)
        })        
        axios.get(url+'/categoriesBrands').then(({data})=>{
        setBrands(data)
        })
        axios.get(url+'/memoryData').then(({data})=>{
            setMemory(data)
        })
    },[])

    // Открытие фильтера брендов 
    const brandMenuChange = () => {
        setBrandMenu(!brandMenu)
        console.log(brandMenu);
    } 
    // Открытие меню филтера 
    const filterChange = () =>{
        setFilterMenu(!filterMenu)
    }
    // Выбор цены в филтере 
    const priceMenuChange = () =>{
        setPriceMenu(!priceMenu)
    }
    // Категория памяти
    const memoryMenuChange = () =>{
        setMemoryMenu(!memoryMenu)
    }

    // Лайки на товарах
    const likeChange = ({id, liked})=>{
        console.log(url + "/" +id);
        axios.patch(url + '/PhoneCatalog/' +id, { liked: !liked })
    }
    console.log(memory);

    return (
    // w-full h-fit py-[110px] px-[160px] 
    <div className=''>   
        <Header/>
        {!filterMenu?
        <div className='w-full h-fit lg:py-[110px] lg:px-[160px] '>
            <div className='hidden lg:flex items-center gap-4'>
                <a href='#' className='text-xl text-[#A4A4A4] font-medium'>Home</a>
                <IoIosArrowForward color='#A4A4A4' size={20}/>
                <a href='#' className='text-xl text-[#A4A4A4] font-medium'>Catalog</a>
                <IoIosArrowForward color='#A4A4A4' size={20}/>
                <a href='#' className='text-xl text-[#A4A4A4] font-medium'>Smartphones</a>
            </div>
            <div className='md:flex mt-12'>
                {/* HEAD */}
                <div className='flex px-4 py-6 w-full gap-4 lg:hidden'>
                    <div className='flex bg-[#FFFFFF] justify-between h-14 w-1/2 border-1 border-[#D4D4D4] rounded-lg items-center p-4' onClick={filterChange}>
                        <p className='text-lg text-[#000000] font-normal'>Filters</p>
                        <IoFilterSharp size={18}/>
                    </div>
                    <div className='flex bg-[#FFFFFF] justify-between h-14 w-1/2 border-1 border-[#D4D4D4] rounded-lg items-center p-4'>
                        <p className='text-lg text-[#000000] font-normal'>By rating</p>
                        <IoIosArrowDown size={18}/>
                    </div>
                </div>
                {/* BRAND */}
                <div className='hidden lg:flex w-64 flex-col gap-5'>
                    <div className='w-full h-12 cursor-pointer' onClick={brandMenuChange}>
                        <div className='bg-red-0 flex w-full justify-between'>
                            <p className='text-xl text-[#000000] font-medium'>Brand</p>
                            {brandMenu?<IoIosArrowUp size={30}/>:<IoIosArrowDown size={30}/>}
                        </div>              
                        <hr className='bg-[#656565] border border-[#929292]'/>  

                    </div>
                    <div>
                        {brandMenu?
                            <div>
                                <div className='flex relative mt-5'>
                                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
                                        </svg>
                                    </span>
                                    <input className="pl-10 py-2 text-[14px] rounded w-full bg-[#F5F5F5]" type='text' placeholder='Search'/>
                                </div>
                                <div className='mt-3 gap-5'>
                                    {brands.map(({id,name,piece})=>{
                                        return(
                                            <div key={id} className='flex items-center gap-2'>
                                                <input type='checkbox' className='w-4 h-4'/>
                                                <p className='text-lg text-[#000000] font-medium'>{name}<span className='text-lg text-[#989898] font-normal'>{piece}</span></p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        :
                        null}
                    </div>    
                                    
                    <div className='w-full h-12 cursor-pointer'>
                        <div className='flex w-full justify-between'>
                            <p className='text-xl text-[#000000] font-medium'>Battery capacity</p>
                            <IoIosArrowDown size={30}/>
                        </div>              
                        <hr className='bg-[#656565] border border-[#929292]'/>      
                    </div>
                    <div className='w-full h-12 cursor-pointer'>
                        <div className='flex w-full justify-between'>
                            <p className='text-xl text-[#000000] font-medium'>Screen type</p>
                            <IoIosArrowDown size={30}/>
                        </div>              
                        <hr className='bg-[#656565] border border-[#929292]'/>      
                    </div>
                    <div className='w-full h-12 cursor-pointer'>
                        <div className='flex w-full justify-between'>
                            <p className='text-xl text-[#000000] font-medium'>Screen diagonal</p>
                            <IoIosArrowDown size={30}/>
                        </div>              
                        <hr className='bg-[#656565] border border-[#929292]'/>      
                    </div>
                    <div className='w-full h-12 cursor-pointer'>
                        <div className='flex w-full justify-between'>
                            <p className='text-xl text-[#000000] font-medium'>Protection class</p>
                            <IoIosArrowDown size={30}/>
                        </div>              
                        <hr className='bg-[#656565] border border-[#929292]'/>      
                    </div>
                    <div className='w-full h-12 cursor-pointer'>
                        <div className='flex w-full justify-between'>
                            <p className='text-xl text-[#000000] font-medium'>Built-in memory</p>
                            <IoIosArrowDown size={30}/>
                        </div>              
                        <hr className='bg-[#656565] border border-[#929292]'/>      
                    </div>
                </div>
                {/* CATALOG */}
            <div>
                <div className='p-4'>
                    <p className='text-lg text-[#6C6C6C] font-medium '>Products Result :<span className='text-lg text-[#000000] font-medium'>85</span></p>
                </div>
                <div className='grid grid-cols-2 gap-4 p-4 md:grid-cols-3 '>
                    {catalog.map(({id,name,price,liked,image})=>{
                        return(
                            <div key={id} className='bg-[#F6F6F6] rounded-[10px] p-5'>
                                <div className='flex justify-end'>
                                    {liked? <FcLike size={30} className='justify-end cursor-pointer' onClick={() => likeChange({id, liked})}/>:<IoIosHeartEmpty size={30} className='justify-end cursor-pointer' onClick={() => likeChange({id, liked})}/>}
                                </div>
                                <div className='flex justify-center'>
                                    <img src={image}/>
                                </div>
                                <div className='h-12 line-clamp-2 text-center mt-3'>
                                    {name}
                                </div>
                                <p className='text-xl text-[#000000] font-medium text-center mt-3.5'>
                                    {price}
                                </p>
                                <div className='flex justify-center'>
                                    <button className='bg-[#000000] rounded-[8px] w-36 h-12 text-[14px] cursor-pointer text-[#FFFFFF]'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* MENU CONTROL  */}
                <div className='bg-red-600 flex gap-4 h-8 justify-center'>
                    <div><IoIosArrowBack size={16}/></div>
                    <div></div>
                    <div className='bg-[#000000] w-8 text-4 font-medium text-center rounded-[6px] text-[#FFFFFF]'>1</div>
                    <div className='bg-[#F6F6F6] w-8 text-4 font-medium text-center rounded-[6px] text-[#000000]'>2</div>
                    <div className='bg-[#F6F6F6] w-8 text-4 font-medium text-center rounded-[6px] text-[#000000]'>3</div>
                    <div>...</div>
                    <div className='bg-[#F6F6F6] w-8 text-4 font-medium text-center rounded-[6px] text-[#000000]'>12</div>
                    <div></div>
                    <div><IoIosArrowForward size={16}/></div>
                </div>
                </div>
            </div>
        </div>
:null
}
{filterMenu?
    <div className='bg-red- w-screen h-screen'>
            <IoIosArrowBack size={22} onClick={filterChange}/>
        <div className='flex p-5 items-center gap-4'>
            <p className='text-2xl text-[#000000] font-medium'>Filters</p>
        </div>
        <div className='px-4 flex flex-col gap-2'>
            <div className='h-13' onClick={priceMenuChange}>
                <div className='flex p-3 justify-between items-center'>
                    <p className='text-xl text-[#000000] font-medium'>Price</p>
                    {priceMenu?<IoIosArrowUp size={22}/>:<IoIosArrowDown size={22}/>}
                </div>
                <hr className=''/>
            </div>
           <div>
            {priceMenu?                 
                <div className="mt-4 ">
                    <label htmlFor="price" className="text-gray-700 font-medium mb-2 h-10 w-24 rounded-sm border-2 border-[#A7A7A7] items-center-center flex justify-center text-center text-lg">
                      <span id="priceValue">50</span> 
                    </label>
                    <input id="price" type="range" min="0" max="100" defaultValue="50" className="w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#000]" onInput={(e) => {
                        document.getElementById("priceValue").innerText = e.target.value;
                    }}/>
                </div>:null}
           </div>
           <div className='' onClick={brandMenuChange}>
                <div className='flex p-3 justify-between items-center'>
                    <p className='text-xl text-[#000000] font-medium'>Brand</p>
                    {brandMenu?<IoIosArrowUp size={22}/>:<IoIosArrowDown size={22}/>}
                </div>
                <hr className=''/>
           </div>
           <div>
                {brandMenu?         
                <div >
                    <div className='flex relative mt-5'>
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
                            </svg>
                        </span>
                        <input className="pl-10 py-2 text-[14px] rounded w-full bg-[#F5F5F5]" type='text' placeholder='Search'/>
                    </div>
                    <div className='mt-3 gap-5'>
                        {brands.map(({id,name,piece})=>{
                            return(
                                <div key={id} className='flex items-center gap-2'>
                                    <input type='checkbox' className='w-4 h-4'/>
                                    <p className='text-lg text-[#000000] font-medium'>{name}<span className='text-[14px] text-[#989898] font-normal ml-4'>{piece}</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :null}
           </div>
           <div className='' onClick={memoryMenuChange}>
                <div className='flex p-3 justify-between items-center'>
                    <p className='text-xl text-[#000000] font-medium'>Built-in memory</p>
                    {memoryMenu?<IoIosArrowUp size={22}/>:<IoIosArrowDown size={22}/>}
                </div>
                <hr className=''/>
           </div>
           
           <div>
                {memoryMenu?
                                <div>
                    <div className='flex relative mt-5'>
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
                            </svg>
                        </span>
                        <input className="pl-10 py-2 text-[14px] rounded w-full bg-[#F5F5F5]" type='text' placeholder='Search'/>
                    </div>
                    <div className='mt-3 gap-5'>
                        {memory.map(({id,memory,piece})=>{
                            return(
                                <div key={id} className='flex items-center gap-2'>
                                    <input type='checkbox' className='w-4 h-4'/>
                                    <p className='text-lg text-[#000000] font-medium'>{memory}<span className='text-[14px] text-[#989898] font-normal ml-4'>{piece}</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :null}
           </div>
            <div className=''>
                <div className='flex p-3 justify-between items-center'>
                    <p className='text-xl text-[#000000] font-medium'>Protection class</p>
                    <IoIosArrowDown size={22}/>
                </div>
                <hr className=''/>
            </div>
            <div className=''>
                <div className='flex p-3 justify-between items-center'>
                    <p className='text-xl text-[#000000] font-medium'>Screen diagonal</p>
                    <IoIosArrowDown size={22}/>
                </div>
                <hr className=''/>
            </div>
            <div className=''>
                <div className='flex p-3 justify-between items-center'>
                    <p className='text-xl text-[#000000] font-medium'>Battery capacity</p>
                    <IoIosArrowDown size={22}/>
                </div>
                <hr className=''/>
            </div>
        </div>
    </div>
:null}
        <Footer/>
    </div>

  )
}

export default Catalog