import React,{useContext, useEffect, useState} from 'react'
import  UseConextProvider  from '../context/useContext'
import useLocalStorager from './state'
import useSearch from './Usearch'


const UseSingle =({id})=>{
    const {results} = useSearch()
    
    const totalproductfind = results.find(index => index.objectID == id)
    const [storedValue, setValue]  =   useLocalStorager({key:id,initialValue:''})
    
    const  [result,setResult] = useState(totalproductfind)
    
    useEffect(() =>{
        if(!result) {
           setValue(result)
        }
    },[result,storedValue])


    return {storedValue} 
    
    }       

    

export default UseSingle