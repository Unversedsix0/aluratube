import { useEffect, useState } from "react";
import config from "../config.json";
import { Header, Menu, Timeline } from "../components";
import { Favorites } from "../components/Favorites";
import { VideoService } from "../services/videos";
import { PlaylistService } from "../services/playlist";
import RegisterVideo from "../components/RegisterVideo";


function HomePage () {

  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [videos, setVideos] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [formVisivel, setFormVisivel] = useState(false);
  
  useEffect(() => {
    const fetchVideo = async () => {
      const response = await VideoService.getAll();
      setVideos(response);
    }
    !formVisivel && fetchVideo()
  }, [formVisivel])

  const fetchPlaylist = async () => {
    const response = await PlaylistService.getAll();
    setPlaylist(response)
  }

  useEffect(() => {
   
   fetchPlaylist();
  }, [])

  return (
    <>
      <div>
        <Menu valorFiltro={valorDoFiltro} setFiltro={setValorDoFiltro} />
        <Header />
        <Timeline valorFiltro={valorDoFiltro} playlist={playlist} videos={videos} />
        <Favorites fav={config.favorites} />
      </div>
      <RegisterVideo formVisivel={formVisivel} setFormVisivel={setFormVisivel} />
    </>
  );
}

export default HomePage;
