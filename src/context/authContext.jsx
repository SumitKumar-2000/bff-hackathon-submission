import { createContext, useState } from "react";

export const AuthCheck = createContext();

const AuthContext = ({children}) =>{

    const [authValues, setAuthValues] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <AuthCheck.Provider value={{authValues, setAuthValues, isSignedIn, setIsSignedIn}}>
            {children}
        </AuthCheck.Provider>
    )
}

export default AuthContext