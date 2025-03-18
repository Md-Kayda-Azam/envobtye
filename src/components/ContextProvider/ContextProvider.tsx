"use client";
import React, { createContext, ReactNode } from "react";

type MyContextType = null;

export const MyContext = createContext<MyContextType>(null);

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return <MyContext.Provider value={null}>{children}</MyContext.Provider>;
};

export default ContextProvider;
