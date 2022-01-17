import React, { useContext }  from "react";
import UseConextProvider  from "../context/useContext";


const useAllcontext =()=>{

    const {results} = useContext(UseConextProvider)
    const {hits} = results
    return {
        hits
    }
}

export default useAllcontext