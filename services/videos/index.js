import { api } from "../api";

const getAll = async () =>{
  
  const {data} =  await api.from("video")
    .select("*")

    return data
}

export const VideoService = {
        getAll
}