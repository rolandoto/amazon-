import {  useContext, useState } from "react"
import  UseConextProvider  from "../context/useContext"



const UseCart = ({id}={})=> {
 
  const [seacrh,setSearch] =useState('')
  const {carts,setCarts,favorite,setFavorite} = useContext(UseConextProvider)
  const  {cart} = carts
  //cuando se ejecucta and tiene que verdaderas las dos
  //agregar carrito de compra
    const handcart = (event) =>{
      //aqui busco si el id que esta en event si esta me returna un dato
     const qty = carts.cart.find((pizza) => pizza.objectID === event.objectID)
      if (qty !=undefined) {
     //aqui esta como lo encapsulando y le indicando que en el carts.cart
     //me va a cambiar el cantidad que le indique
        qty.cantidad +=1
        qty.price += qty.price
      } else {
       
       setCarts({
         ...carts,
         cart:[...carts.cart,{...event,cantidad:1}]
       })
       //aqui puedo agregar cantidad en el carts.cart 
      }
  }

    const handdelete =(event) =>{
      setCarts({
        ...carts,
        cart:[...carts.cart.filter(index =>index.objectID != event.objectID)]
      })
    }

    const handFavorite = (event) =>{
      
    const item = favorite.fav.find((index)  => index.objectID ==event.objectID)

      if(item){
      }else {
        setFavorite({
          ...favorite,
          fav:[...favorite.fav,event]
        })
      }
  }

    const handelefav =(event) =>{
    setFavorite({
      ...favorite,
      fav:[...favorite.fav.filter(index =>index.objectID != event.objectID)]
    })
  }
 
  const totalprice= cart.reduce((accumulator, currentValue) =>  accumulator + currentValue.price ,0);

    return {
      carts,
      handcart,
      seacrh,
      setSearch,
      handdelete,
      totalprice,
      handFavorite,
      favorite,
      handelefav
    }
}
export default  UseCart
