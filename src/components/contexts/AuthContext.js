import React,{ useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ Children }) => {
  const [currentUser, setCurrentUSer] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }


  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUSer(user);
    });
    return unsubscribe
  }, []);

  const value = {
    currentUser,
    signup
  };
  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
};
