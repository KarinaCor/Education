import { useContext } from 'react'

import { AuthContext, useAuth } from "../context/AuthContext";

export const Third = () => {
    const { isAuth, logIn, logOut, username } = useAuth();
    console.log('first', isAuth);
    return (
        <>
        <button onClick={logOut}>Log out</button>
        </>
    )
}