import algoliasearch from 'algoliasearch'

const VITE_ALGOLIA_APP_ID='4IFFON8EJ0'
const VITE_ALGOLIA_API_KEY='56a634abceb493f46972fe44be430b0b'
const VITE_ALGOLIA_INDEX_NAME='store-'

const client = algoliasearch(VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY)
const index = client.initIndex(VITE_ALGOLIA_INDEX_NAME)

export async function PerformSearche ({ query = '',limit=6 }) {
   
  const options =  {
    hitsPerPage: limit,
    clickAnalytics: true
  }
  
const {hits,queryID} = await index.search(query, options)

    return {
        hits,queryID
    }
}
export async  function getObject (objectID) {
    const re =await index.getObject(objectID)
    console.log(re)
  }

