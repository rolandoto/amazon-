import React from 'react'
import { PayPalButton } from 'react-paypal-button'
import {navigate} from "@reach/router"
import UseCart from '../hooks/useCart'

const Buttonpaypal =()=>{

    const {totalprice} = UseCart()
    const handesuceess = (data) => {
     if (data.status === 'COMPLETED') {
       //AQUI ESTA ALMACENANDO TODA LA INFORMACION DEL CARRTIO,PRODUYCTO,
       navigate('/payment')
       console.log('exicto')
     }
   }

    //codo id de la api 
   const paypalPotion = {
     clientId: 'AST7SEzEO8v1laBAfb8JhSxYoBzQ8gEbqTRYDjmvsrZuAZz6HEm82P15UdWHpJ1tQNqMiTjLEkweAuBK',
     intent: 'capture',
     currency: 'USD'
   }
   //estilos de paypel
   const buttonStyles = {
     loyout: 'vertical',
     shape: 'rect'
   }
    return (
        <div>
              <PayPalButton
              paypalOptions={paypalPotion}
              buttonStyles={buttonStyles}
              amount={totalprice}
              onPaymentStart={() => console.log('start payment')}
              //EL AQUI MANDA UNOS DATOS EN LA FUNCION
              onPaymentSuccess={data => handesuceess(data)}
              onPaymentError={error => console.log(error)}
              onPaymentCancel={data => console.log(data)}
            />
        </div>
    )
}

export default Buttonpaypal