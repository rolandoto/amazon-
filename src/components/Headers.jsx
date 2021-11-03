import React from 'react'
import  logoUrl from  '../image/miduzon.png'
import { Link } from '@reach/router'
import Cart from './Cart'
import Search from './Search'
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";

const Headers = () => {
    return (
      <div>
        
          <header className='Header'>
          <div className='Header-top'>
          <Link to='/'>
              <a>
                <img className='Header-logo' src={logoUrl} alt='logo miduzon' />
              </a>
            </Link>
            <div className='flex-navbar'>
              <Link  to='/favorite'>
                <a >
              <MdFavorite size={25}  color='#f09841' />
              </a>
              </Link>
              <Link to='/Cart'>
                <a>
                <Cart />
                </a>
              </Link>
            </div>
          </div>
        <Search />  
        </header>
      </div>
    )
}

export default Headers