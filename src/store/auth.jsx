import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

 //logout user

 let isLoggedIn = !!token

 const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem( "token" )
 }

 //get user data from backend

 const userAuthentication = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/user",{
            method:"GET",
            headers:{
                Authorization : `Bearer ${token}` 
            }
        });

        

        if(response.ok){
            const data = await response.json();
            setUser(data.userData)
        }

    } catch (error) {
        console.log("error from get user data",error);
    }
 }

 useEffect(()=> {
    if (token) {
        userAuthentication();
    }
   
 },[userAuthentication]);


 

   return <AuthContext.Provider value={{isLoggedIn,storeTokenInLs,LogoutUser,user}}>
        {children}
    </AuthContext.Provider>

}

export const useAuth = () => {
    return useContext(AuthContext);
}