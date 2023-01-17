import { useState } from "react";

import config from "../config.json";
import { CSSReset } from "../components/CSSReset/CSSReset";

import { Header, Menu, Timeline } from "../components";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <CSSReset />
      <div>
        <Menu valorFiltro={valorDoFiltro} setFiltro={setValorDoFiltro} />
        <Header />
        <Timeline playlist={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
