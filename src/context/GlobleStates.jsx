import { createContext } from "react";

export const UserTocken = createContext({ tocken: "", setTocken: () => {} });
export const CurrUser = createContext({
  user: { username: "", emai: "", role: "" },
  setUser: () => {},
});
