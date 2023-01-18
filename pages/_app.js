import { useContext } from "react";
import { theme } from "../theme/palette";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../components/CSSReset/CSSReset";
import { ColorModeProvider,ColorModeContext } from "../components/Menu/components/ColorMode";


function ProviderWrapper(props){
  return(
    <ColorModeProvider initialMode={"light"}>
      {props.children}
  </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  const contexto = useContext(ColorModeContext);
  console.log("contexto",contexto)
  return (
      <ThemeProvider theme={theme[contexto.mode]}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default function _App(props){
  return(
  <ProviderWrapper>
    <MyApp {...props}/>
  </ProviderWrapper>

  )
}