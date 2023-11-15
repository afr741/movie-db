import React, { useState } from "react";
// import React, { useState, createContext } from "react";

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default ContextProvider;

// set up a global context and a state that we want our application to be able to access globally.
