import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import Loader from "react-loader-spinner";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <Loader
          type="TailSpin"
          color="red"
          height={300}
          width={300}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
