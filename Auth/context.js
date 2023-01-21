import React, { createContext, useContext, useState } from "react";

const Auth = createContext();
function Context({ children }) {
  const [isAuth, setisAuth] = useState(false);
  return <Auth.Provider value={{ isAuth, setisAuth }}>{children}</Auth.Provider>;
}

export function useGlobalContext() {
  return useContext(Auth);
}

export default Context;
