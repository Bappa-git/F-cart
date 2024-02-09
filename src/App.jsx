import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'

import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Owlcarousel from './components/Owlcarousel'
import { items } from './components/Data'

const App = () => {

const [data, setData] = useState([...items])
  return (
    <>
    <BrowserRouter>
       <Navbar/>
 
        <Routes>
            <Route path=''element={<><Owlcarousel/><Products items={data}/></>}/>
            <Route path='/product/:id'element={<ProductDetail/>}/>
            <Route path='/search/term:'element={<SearchItem/>}/>
            <Route path='/cart'element={<Cart/>}/>
        </Routes>

      <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App
