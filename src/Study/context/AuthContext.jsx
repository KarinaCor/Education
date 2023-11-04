import { useContext, createContext, useState} from 'react'



export const AuthContext = createContext()

export const Context = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState(null);
const logIn = () => {
setIsAuth(true)
setUsername("Hello Mary");
}

const logOut = () => {
    setIsAuth(false);
    setUsername(null);
}

return(
    <AuthContext.Provider value={{isAuth, logIn, logOut, username}}>
    {children}
    
    </AuthContext.Provider>
)
} 

export const useAuth = () => {
    const value = useContext(AuthContext)
    return value;
}