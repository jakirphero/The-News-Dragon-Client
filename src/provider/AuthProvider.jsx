import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/Firebase-conf'

export const AuthContext = createContext(null);

//ajaiga thike jeno sob jaigai kj korta pari
const auth = getAuth(app)

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // user ki kj kortaci ta chek kora abon bondo kora
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, logUser=>{
            console.log('logged user on auth state change', logUser);
            setUser(logUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    },[])

    
    

    // jati sob jagai theki ami agolo pai
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
        
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;