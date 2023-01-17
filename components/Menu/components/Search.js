import { useState } from "react";

import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

// Home
// Menu
// Search
// Informação sempre desce

export function Search(props) {

  const { valorFiltro, setFiltro } = props;

  //const [valorDaBusca, setValorDaBusca] = useState("Teste");
  console.log("Search:", valorFiltro);

  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setFiltro(e.target.value)}
        value={valorFiltro}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
