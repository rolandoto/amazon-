import {  useContext, useEffect, useState } from 'react'
import  UseConextProvider  from '../context/useContext'
import  UseproviderInternet  from '../context/useContextInternet'
import  {PerformSearche}  from '../service/Perfomaceservice'

const INITAL =6
export default function useSearch (params = {}) {
 
  const [page,setPage] =useState(INITAL)

  const {results, setResults} = useContext(UseConextProvider)
  const {setIntet} = useContext(UseproviderInternet)

  const [loading,setLoading] =useState(false)

  

  useEffect(() =>{
        setLoading(true)
        PerformSearche({limit:page}).then(index =>{
        sessionStorage.setItem('token',JSON.stringify(index))
        setResults(index)
         alert('internet connect')
         setIntet(true)
        setLoading(false)
      }).catch(() =>{
          setIntet(false)
         alert('internet desconnect')
      })
  },[page,setResults])
    

  return {
    loading,
    setPage,
    results: results.hits,
    queryID: results.queryID
    
  }
}
