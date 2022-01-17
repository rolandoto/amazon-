import React, { useState } from 'react'


const Context = React.createContext({})

export const UseproviderInternet =({children}) =>{

    const [inet,setIntet] = useState(null)
    return  (
        <Context.Provider value={{inet,setIntet}}>
                {children}
        </Context.Provider>
        )
}

export default Context