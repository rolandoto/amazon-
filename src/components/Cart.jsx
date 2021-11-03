import React from 'react'
import UseCart from '../hooks/useCart'
import Icon from './Icon'


const Cart = ()=> {
    const {carts} = UseCart()
    const {cart }= carts
  
    return (
        <div className='Cart'>
            <span className='Cart-items'>{cart.length} </span>
        <Icon name='cart' />
      </div>
    )
}
export default Cart