import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("checking token on refresh: ", isAuthenticated);
  // change to false to work
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token checking: ", !!token);

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    console.log("token in login: ", token);
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
