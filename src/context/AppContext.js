import React, { useState, createContext } from "react";

const AppContext = createContext();
const data = {
  updateContext: () => {},
  cartModalState: false,
  cartTempDetails: {},
  subpage: "",
};

export const AppContextProvider = (props) => {
  const [state, setState] = useState(data);

  const updateContext = (d) => {
    setState((prev) => {
      return { ...prev, ...d };
    });
  };
  const context = {
    ...state,
    updateContext: updateContext,
  };
  return (
    <>
      <AppContext.Provider value={context}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default AppContext;
