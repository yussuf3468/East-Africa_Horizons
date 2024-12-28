import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      return JSON.parse(storedUser); // Parse the stored user information from localStorage
    }
    return null; // No user info by default
  });

  // Sync user data with localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user)); // Store user data in localStorage
    } else {
      localStorage.removeItem("userInfo"); // Remove user data when logged out
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
