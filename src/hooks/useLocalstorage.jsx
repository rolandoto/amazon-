import { useCallback, useEffect, useState } from "react"


const Uselocalstorage = (key,initalvalue) => {
   
  const [storage,setStorage] = useState(() => {
  
    try{
          const item = window.localStorage.getItem(key) 
          return item != null ? JSON.parse(item):initalvalue
  }catch (e) {
        console.log(e)
     }

  })

  const setValue =(evento)=> {
     
    try {
          window.localStorage.setItem(key,JSON.stringify(evento))
          setStorage(evento)
    }catch (e) {
      console.log(e)
    }
  }


    const dele = (evento) => {
        const item =  window.localStorage.removeItem(key)
        setStorage(!evento)
        return item ? null: initalvalue

    }
   
  return [storage,setValue,dele]
}


export default Uselocalstorage