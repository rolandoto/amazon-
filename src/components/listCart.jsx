import React from 'react'
import Price from './price'


const Liscart =({index,handdelete}) =>{
   
    return (
        <div>
         <div className='CartPage-item' >
          <div className='CartPage-itemInfo'>
          <img className='CartPage-itemImage' src={index.image}   />
            <div>
              <h4 className='CartPage-itemTitle'>{index.name} </h4>
                   <Price  price={index.price} />
              <p className='CartPage-itemStock'>En stock</p>
              <p>Cantidad: {index.cantidad }  </p>
              <button  className='Button' onClick={()=> handdelete(index)}>
                borrar
            </button>
            
            </div>
            
          </div>
        </div>    
        
        </div>
    )
}


export default  Liscart