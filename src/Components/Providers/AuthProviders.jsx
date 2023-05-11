import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext(null);
import app from "../firebase/firebase.config";

const AuthProviders = ({ children }) => {
  const [userr, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
//module 61
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
    
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    //stop observing while unmounted
    return () => {
      unsubScribe();
    };
  }, []);


  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    loading,
    userr,
    createUser,
    signIn,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
