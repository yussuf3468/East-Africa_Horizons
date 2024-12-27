import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      return { username: null, token }; // Load token from localStorage
    }
    return null; // No user or token by default
  });

  // Sync token with localStorage whenever user changes
  useEffect(() => {
    if (user?.token) {
      localStorage.setItem("authToken", user.token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
