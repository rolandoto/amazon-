import React, { useCallback, useRef } from "react";
import UseCart from "../hooks/useCart";
import Icon from "./Icon";


const Search = () => {
    const  {setSearch}  = UseCart()
    
    const searchinput = useRef(null)

    const handsearch = useCallback(() =>{
        setSearch(searchinput.current.value)
    },[])

    return (
        <div>
            <form className='Search'>
                <input className='Search-input'
                placeholder='buscar Miduzon.es'
                data-aria-clear='borrar palabras de busquedad'
                name='k'
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                dir='auto'
                onChange={handsearch}
                ref={searchinput}
                 />
                <a tabIndex='0'
                href='#'
                aria-label='borrar palabras de busquedad'>
                 <Icon name='clear' />       
                </a>
                <button
                 className='Search-submit'
                 aria-label='Search'>
                     <Icon name='search' />
                </button>
            </form>
        </div>
    )
}

export default Search 