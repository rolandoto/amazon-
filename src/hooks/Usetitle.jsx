import { useEffect, useRef } from "react"

const Usetitle =({title}) =>{
    //aqui esta capturando el title original
    const preveTitle = useRef(document.title)
    
    useEffect(() =>{
        const previusTitle = preveTitle.current
        
        document.title = `${title} | Miduzon`
        
        //cuando se desmonte el previus le va a pasar el previusTitle
        //que tenia  
        return ()=> document.title = previusTitle
    },[title])

}
export default Usetitle