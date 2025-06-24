import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Basket from './Pages/Basket'
import Step1 from './Pages/Step1'
import Step2 from './Pages/Step2'
import Step3 from './Pages/Step3'
import Catalog from './Pages/Catalog'
const App =()=> {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>    
        <Route path='/Blog' element={<Blog/>}/>    
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Step1' element={<Step1/>}/>
        <Route path='/Step2' element={<Step2/>}/>
        <Route path='/Step3' element={<Step3/>}/>
        <Route path='/Catalog' element={<Catalog/>}/>
      </Routes> 
    </div>
  )
}

export default App
