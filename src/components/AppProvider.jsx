import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const initialState = "";
  const [opera, setOpera] = useState(initialState);

  return (
    <AppContext.Provider value={{ opera, setOpera }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
