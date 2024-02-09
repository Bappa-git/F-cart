import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar ">
        <div className="brand" ><Link to={'/'}>f-shop</Link></div>
        <div className="search-bar">
            <input type="text" placeholder='Search Products'/>
        </div>
        <div className="cart blue text-warning"><Link to={'/cart'}><i class="fa-solid fa-cart-shopping"></i></Link></div>
        </div>
    </header>
    
    <div className="nav-bar-wrappar d-flex justify-content-between">
      <div className="item">filter by{"->"}</div>
      <div className="item">no filter</div>
      <div className="item">Mobiles</div>
      <div className="item">Laptops</div>
      <div className="item">Tablets</div>
      <div className="item">{">="}29999</div>
      <div className="item">{">="}39999</div>
      <div className="item">{">="}69999</div>
      <div className="item">{">="}89999</div>
    </div>

    </>
  )
}

export default Navbar