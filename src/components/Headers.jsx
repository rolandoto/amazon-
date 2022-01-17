import React, { useContext } from 'react'
import  logoUrl from  '../image/miduzon.png'
import { Link } from '@reach/router'
import Cart from './Cart'
import Search from './Search'
import { MdFavorite } from "react-icons/md";
import  UseproviderInternet from '../context/useContextInternet'
import { BiWifi ,BiWifiOff} from "react-icons/bi"

const Headers = () => {
    const {inet} = useContext(UseproviderInternet)
    
    const IconInternet = inet ? <span ><BiWifi fontSize={25}  color='#9de1fa' /></span>  : <span ><BiWifiOff fontSize={25} color='#d92424' /> </span>
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
                    {IconInternet}   
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