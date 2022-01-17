import React,{useContext} from 'react'
import  {Router}  from '@reach/router'
import Detail from '../pages/Detail'
import  Home  from '../pages/Home'
import Headers from './Headers'
import Cart from '../pages/Cart'
import Favorite from './Favorite'
import PymentExict from '../pages/Pymentexict'

const  Main = () => {
   
    return  (
        <div className='App'>
                <Headers />
                    <Router>
                        <Home path='/'  />
                        <Detail path='/list/:id' />
                        <Favorite path='/favorite' />
                        <Cart path='/Cart/' />
                        <PymentExict path='/payment' />
                    </Router>
        </div>
    )
}

export default Main 