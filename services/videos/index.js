import { api } from "../api";

const ROTA = 'video'

const getAll = async () =>{
  
  const { data } =  await api.from(ROTA)
    .select("*")

    return data
}

const post = async (video) =>{

  const { data } = await api.from(ROTA).insert({
    title: video.titulo,
    url: video.url,
    thumb: video.thumb,
    id_playlist:video.playlist
  })
 
  return data
}

export const VideoService = {
  getAll,
  post
}