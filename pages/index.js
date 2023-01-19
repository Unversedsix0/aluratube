import { useState } from "react";

import config from "../config.json";

import { Header, Menu, Timeline } from "../components";
import { Favorites } from "../components/Favorites";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <div>
        <Menu valorFiltro={valorDoFiltro} setFiltro={setValorDoFiltro} />
        <Header />
        <Timeline valorFiltro={valorDoFiltro} playlist={config.playlists} />
        <Favorites fav={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
