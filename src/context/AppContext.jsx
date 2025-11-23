import { createContext, useContext } from "react";
import { useApp } from "../hooks/useApp";
const AppContext= createContext()
export const AppProvider=({children})=>{
    const appData= useApp()
    return <AppContext.Provider value={appData}>{children}</AppContext.Provider>

}
export const useAppContext=()=>{
    return useContext(AppContext)
}