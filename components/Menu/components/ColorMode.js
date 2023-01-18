import React, { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
  toggleMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export const ColorModeProvider = (props) => {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }
  
  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
};
