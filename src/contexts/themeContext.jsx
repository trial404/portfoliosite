import React, { createContext, useState } from "react";

export const GridStateContext = createContext();

export function GridStateProvider(props) {
  const [activeSquare, activate] = useState(false);
  const toggleTheme = () => changeTheme(!isDarkMode);

  return (
    <GridStateContext.Provider value={{ activeSquare, toggleTheme }}>
      {props.children}
    </GridStateContext.Provider>
  );
}
