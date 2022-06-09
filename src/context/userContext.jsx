import { useContext,createContext, useState} from "react";

const UserContext=createContext();
export const useUserContext=()=>useContext(UserContext);

export const UserProvider=({children})=>{
    const readUser=()=>{
        let val;
        if (val!==""){
            return localStorage.getItem("username")
        }else{
            return ""
        }
    }
    const [userName,setUserName]=useState(readUser)
   
    return(
        <UserContext.Provider value={{userName,setUserName}}>
            {children}
        </UserContext.Provider>
    )
}
