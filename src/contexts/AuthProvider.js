import React, { createContext, useState } from 'react'
import app from '../firebase/firebase';
import {getAuth, signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = { user, googleSignIn }
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;