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

  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("ff")
        console.log(currentUser)
      setUser(currentUser);
    });
    //stop observing while unmounted
    return()=>{
        unsubScribe()
    }
  }, []);
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };




  const logout = () => {
    return signOut(auth);
  };


  


  const authInfo = {
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
