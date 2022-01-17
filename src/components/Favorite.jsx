import React from 'react'
import UseCart from '../hooks/useCart'
import Lisfovarite from './Listfovorite'



const Favorite =() =>{
const {favorite} = UseCart()

    return (
        <div className='grid-fav'>
            {
                favorite.fav.map((index) =>(
                   <Lisfovarite key={index.objectID} {...index} />
                ))
            }
        </div>
    )
}
export default Favorite