import { useEffect, useState } from "react";
import config from "../config.json";
import { Header, Menu, Timeline } from "../components";
import { Favorites } from "../components/Favorites";
import { VideoService } from "../services/videos";


function HomePage () {
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [value, setValue] = useState([]);
  
  const fetchVideo = async () =>{
    const response = await VideoService.getAll();
    console.log(response);
    setValue(response);
  }

  useEffect(() => {
   fetchVideo();
  }, [])

  return (
    <>
      <div>
        <Menu valorFiltro={valorDoFiltro} setFiltro={setValorDoFiltro} />
        <Header />
        <Timeline valorFiltro={valorDoFiltro} playlist={value} />
        <Favorites fav={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;
