import React from "react";
import Container from "../components/Container";
import useSearch from "../hooks/Usearch";
import UseCart from "../hooks/useCart";


const Detail =({id}) => {
    
     
  const {results} = useSearch()
  const {handcart} = UseCart()
  
    
    const result = results.find(index =>  index.objectID ==id)
   
    if(!result) return <h1>vuelve a cargar la pagina</h1>
    return (

      <div className='Detail'>
      <Container>
        <p className='Detail-description'>{result.description}</p>
        <img className='Detail-image' src={result.image} />
        <div className='Detail-priceContainer'>
          <div>
            Precio:
          </div>
          <span className='Detail-price'>
            {result.price} €
          </span>
        </div>
        <button className='Detail-addToCart' onClick={() => handcart(result)}  >
          Añadir a la cesta
        </button>
      </Container>
    </div>
    )
}

export default Detail