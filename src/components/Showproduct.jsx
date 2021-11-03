import React from 'react'
import Card from './Card'

const ShowProdut = ({products}) => {
    //que sea distintos a productos para controlar cuando return null
    if(products == null) return <h1>no hay productos</h1>
    return (
        <div>
            <div className='ShowProducts'>
            {
                products.map((product) => (
                <Card key={product.objectID} product={product} />
                ))
            }
            </div>
        </div>
    )
}

export default ShowProdut