import { createContext, useState } from "react";

const initState = {isLoggedIn:false, user:null}
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(
        JSON.parse(sessionStorage.getItem("auth")) || initState);

    const login = (user) => {
        setAuth({ isLoggedIn:true, user })
        sessionStorage.setItem("auth",JSON.stringify({ isLoggedIn:true, user }));
    }
    const logout = () => {
        setAuth( initState )
        sessionStorage.clear();
    }
    const value = {auth, login, logout}
    return <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </>
}