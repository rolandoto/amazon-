import React, {  useState } from 'react'


const Context = React.createContext({})

export const  UseConextProvider =({children}) => {

   const state = {
        cart:[]
      }

  const favorites = {
      fav:[]
    }

        
    const item = window.sessionStorage.getItem('token') 
    
    

    const [results, setResults] = useState({hits:null,queryID:null})

    const [carts,setCarts] =useState(state)
    const [favorite,setFavorite] =useState(favorites)

    return  <Context.Provider  
            value={{results, 
                    setResults,
                    carts,
                    setCarts,
                    favorite,
                    setFavorite}} >
                    {children}
            </Context.Provider>
    
}

export default Context