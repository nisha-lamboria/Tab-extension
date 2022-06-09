import { useContext,createContext, useState, useEffect } from "react";

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

    // console.log(userName);
   
    return(
        <UserContext.Provider value={{userName,setUserName}}>
            {children}
        </UserContext.Provider>
    )
}
