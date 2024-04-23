import { createContext,useState} from "react";


export const authContext = createContext();

export function AuthContextProvider({children}){

    const[token, setToken] = useState("");
    console.log(token,' token from authContext');
    
    return <authContext.Provider value={{token, setToken}}>
        {children}
    </authContext.Provider>
}

