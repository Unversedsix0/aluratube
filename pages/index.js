import { useState } from "react";

import config from "../config.json";

import { Header, Menu, Timeline } from "../components";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <div>
        <Menu valorFiltro={valorDoFiltro} setFiltro={setValorDoFiltro} />
        <Header />
        <Timeline valorFiltro={valorDoFiltro} playlist={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
