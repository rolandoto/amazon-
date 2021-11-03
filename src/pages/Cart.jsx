import React from "react";
import EmptyCart from "../animation/EmptyCart";
import Buttonpaypal from "../components/Buttonpaypal";
import Container from "../components/Container";
import Liscart from "../components/listCart";
import UseCart from "../hooks/useCart";

const Cart =()=> {
   
    const {handdelete,carts,acumaldor,totalprice} = UseCart()
   
    if(carts.cart.length ==0) return <EmptyCart />
  
    return(
      <Container>
        <h2  className='Subtitle'>Subtotal $ <strong>{totalprice} </strong></h2>
          {carts.cart.map(index => (
          <Liscart  key={index.objetID} handdelete={handdelete} acumaldor={acumaldor}  index={index} />
            ))}
            <Buttonpaypal />
        </Container>
    )
}
 export default Cart