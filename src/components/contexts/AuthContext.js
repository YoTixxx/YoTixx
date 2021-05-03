import { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ Children }) => {
    const [currentUser, setCurrentUSer]= useState()

    const value  = { 
        currentUser
    }
  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
};
