import { api } from "../api";

const ROTA = 'playlist'

const getAll = async() => {

  const { data } = await api.from(ROTA)
    .select("*")

  return data
};

export const PlaylistService = {
  getAll,
};
