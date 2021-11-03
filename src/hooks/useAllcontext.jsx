import React, { useContext }  from "react";
import UseConextProvider  from "../context/useContext";


const useAllcontext =()=>{

    const context = useContext(UseConextProvider)
    const {hits} = context.results
    return {
        hits
    }

}

export default useAllcontext