//create context
//provider
//useContext()

import React, { useContext } from "react";
//create context
const AppContext=React.createContext();
//provider
const AppProvider=({children})=>{
    return  <AppContext.Provider value={"gouranga is a good boy"}>
    {children}
</AppContext.Provider>
    
}

const useGlobalContext=()=>{
    return useContext(AppContext);
};
export{useGlobalContext,AppContext,AppProvider};