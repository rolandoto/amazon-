import React from 'react'
import Container from '../components/Container'
import ShowProdut from '../components/Showproduct'
import useSearch from '../hooks/Usearch'

const Home = ()=> {

    const {results,loading} = useSearch()
    
    const resultloading = loading ? results  : results
    
    return (
        <div>
            <Container>
                 <ShowProdut  products={resultloading} />
            </Container>
        </div>
    )
}
export default  Home

