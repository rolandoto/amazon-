import { useContext, useEffect, useState } from 'react'
import  UseConextProvider  from '../context/useContext'
import  {PerformSearche}  from '../service/Perfomaceservice'

const INITAL =20
export default function useSearch (params = {}) {
 
  const [page,setPage] =useState(INITAL)

  const {results, setResults} = useContext(UseConextProvider)
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    PerformSearche({limit:page}).then(list => {
        setResults(list)
        setLoading(false)
    })
  },[page,setResults])
  
  return {
    
    loading,
    results: results.hits,
    queryID: results.queryID,
    setPage,
   
  }
}
