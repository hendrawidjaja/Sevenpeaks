import React, { createContext } from "react";

// Create a Context
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  return <MyContext.Provider value={1212}>{children}</MyContext.Provider>;
};
