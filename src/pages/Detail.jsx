import React,{useContext} from "react";
import Container from "../components/Container";
import UseAlgolia from "../hooks/UseAlgolia";
import useSearch from "../hooks/Usearch";
import UseCart from "../hooks/useCart";
import UseConextProvider from '../context/useContext'

const Detail =({id}) => {
    const {senProduct} = UseAlgolia()
    
    const {results} = useContext(UseConextProvider)
   
    const {hits} = results

  const {handcart} = UseCart()
  
  const handToCart =(event) =>{
    handcart(event)
    senProduct(event.objectID)
  }

    const result = hits.find(index =>  index.objectID ==id)
   
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
        <button className='Detail-addToCart' onClick={handToCart(result)}  >
          Añadir a la cesta
        </button>
      </Container>
    </div>
    )
}

export default Detail