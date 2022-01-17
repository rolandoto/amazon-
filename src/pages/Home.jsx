import React from 'react'
import Container from '../components/Container'
import ShowProdut from '../components/Showproduct'
import useSearch from '../hooks/Usearch'

const Home = ()=> {
    const {results,setPage} = useSearch()
    
    const hadnex =()=>{
        setPage(preve  =>preve+6)
    }
    
    return (
        <div>
            <Container>
                 <ShowProdut  products={results} />
                 <button className='Button-home' onClick={hadnex}>cargar mas</button>
            </Container>
        </div>
    )
}
export default  Home

