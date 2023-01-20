import { api } from "../api";

const getAll = async () =>{
  
  const {data} =  await api.from("video")
    .select("*")

    return data
}
const post = (data) =>{

  api.from('video').insert({
    title:data.titulo,
    url:data.url,
    thumb:data.thumb
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error)=>{
      console.log("Error Post: ",error)
  })
}

export const VideoService = {
        getAll,
        post
}