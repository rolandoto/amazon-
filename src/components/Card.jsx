import React  from 'react'
import { Link } from '@reach/router'
import '../index.css'
import UseCart from '../hooks/useCart'
import Uselocalstorage from '../hooks/useLocalstorage'
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";

const Card =({product}) => {
    const {objectID,name,image,price,margin} =product
    const key = `like${objectID}`
    const [storage,setValue]  = Uselocalstorage(key,false)
    const {handFavorite,handelefav} = UseCart()
    
    const Icom =storage ? <MdFavorite color="black"  size={30} />  :  <MdFavoriteBorder size={30} color="black" />
    
     const handkile =() => {
        setValue(!storage)
     }
     
    return (
        <div className='Card' >
           <Link to={`/list/${objectID}`} className='Card-anchor' >
                    <img className='Card-image' src={image} alt={name} loading='lazy' />
                    <span className='Card-text'>{name}</span>
                    <span className='Card-text'>${price}</span>
            </Link>
            <button className='bord' type='submit' onDoubleClick={handkile}  onClick={() =>storage ?handelefav(product): handFavorite(product) } >
                {Icom} likes {margin}
            </button >
        </div>
    )
}
export default Card
