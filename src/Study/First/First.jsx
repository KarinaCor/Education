import { Second } from "../Second/Second"
import { useContext } from 'react'
import { AuthContext, useAuth } from "../context/AuthContext";
import { Third } from "../Third/Third";




export const First = ({}) => {
    // const value = useContext(AuthContext)
    
    // console.log('props', state);
    const { isAuth, username } = useAuth();
   
    console.log(null ?? 3 ?? true ?? 10);

    return(
        <>
         {isAuth && <h1>{username}</h1>}
        

      {!isAuth && <Second/>}
      { isAuth && <Third/>}
         
       
        
        </>
       
    )
}