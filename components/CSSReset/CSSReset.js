import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      border: 1px solid #20202009;
      background-color: #20202035;
      
    }
    &::-webkit-scrollbar-thumb {
      background-color: #0000005a;
      border-radius: 4px;
      height: 5px;
    }
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase || "#e5e5e5"};
    color:${({ theme }) => theme.textColorBase || "#e5e5e5"};
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;