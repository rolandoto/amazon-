import React from "react";
import EmptyCart from "../animation/EmptyCart";
import Buttonpaypal from "../components/Buttonpaypal";
import Container from "../components/Container";
import Liscart from "../components/listCart";
import useLocalStorager from "../hooks/state";
import UseCart from "../hooks/useCart";

const Cart =()=> {
    const {handdelete,carts,acumaldor,totalprice} = UseCart()
    const {cart} = carts
    

    if(cart.length ==0) return <EmptyCart />
    
    return(
      <Container>
        <h2  className='Subtitle'>Subtotal $ <strong>{totalprice} </strong></h2>
          {cart.map(index => (
          <Liscart  handdelete={handdelete} acumaldor={acumaldor}  index={index} />
            ))}
            <Buttonpaypal />
        </Container>
    )
}
 export default Cart