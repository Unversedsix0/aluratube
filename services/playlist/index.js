import { api } from "../api";

const getAll = async() => {

    const {data} =  await api.from("playlist")
    .select("*")

    return data
};

export const PlaylistService = {
  getAll,
};
