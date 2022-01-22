import React, { createContext, useState } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({children})=>{
        const [Token,setToken] = useState(false)

    

    return <>
         <AuthContext.Provider value={{Token,setToken}}>{children}</AuthContext.Provider>
    </> 
}

export { AuthContext , AuthContextProvider }

