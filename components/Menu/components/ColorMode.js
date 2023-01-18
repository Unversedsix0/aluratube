import React, { createContext, useState } from 'react'

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro!")  },
    //toggleMode: () => { alert("Você precisa me configurar primeiro!")  },
});

export const ColorModeProvider = (props) => {
    const[mode, setMode] = useState(props.initialMode);
  return (
    <ColorModeContext.Provider value={{mode:mode,setMode: setMode}}>
     {props.children}
    </ColorModeContext.Provider>
   
  )
}
