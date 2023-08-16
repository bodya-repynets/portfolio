"use client";
import { createContext, useContext, useState } from "react";

export const useGlobalContext = () => useContext(GlobalContext);
const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [section, setSection] = useState("");
  return (
    <GlobalContext.Provider value={{ section, setSection }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
