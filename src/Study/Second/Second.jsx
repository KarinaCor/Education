import { Third } from "../Third/Third"
import { AuthContext, useAuth } from "../context/AuthContext";


export const Second = () => {
    const { isAuth, logIn, logOut, username } = useAuth();
    console.log('first', isAuth);
    return(
        <>
         
          <button onClick={logIn}>Log in</button>
        </>
       
    )
}