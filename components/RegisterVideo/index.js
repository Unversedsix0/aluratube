import { useEffect, useState } from "react";
import { PlaylistService } from "../../services/playlist";
import { VideoService } from "../../services/videos";
import { StyledRegisterVideo } from "./style";


function useForm({ defaultValues }) {

  const [values, setValues] = useState(defaultValues);

  return {
    values,
    handleChange: ({ target }) => {
      setValues({ ...values, [target.name]: target.value });
    },
    reset: () => {
      setValues(defaultValues);
    },
  };
}

const RegisterVideo = (props) => {

  const { formVisivel, setFormVisivel } = props
  
  const [playlists, setPlaylists] = useState([]);

  const { values, handleChange, reset } = useForm({
    defaultValues: { titulo: "T", url: "https://www.youtube.com/", thumb:"Thumb", playlist: 0},
  });

  useEffect(() => {
    async function fetch(){
      const response = await PlaylistService.getAll()
      setPlaylists(response)
    }
    formVisivel && fetch()
  }, [formVisivel])

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel && (
        <form>
          <div>
            <button
              className="close-modal"
              type="button"
              onClick={() => setFormVisivel(false)}
              
            >
              X
            </button>
            <input
              placeholder="Título do Vídeo"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={values.url}
              onChange={handleChange}
            />
            <input
              placeholder="Thumbnail do video"
              name="thumb"
              value={values.thumb}
              onChange={handleChange}
            />
            <select name="playlist" onClick={handleChange}>
              {
                playlists.map((value, id) => {
                  return (
                    <option key={id} value={value.id}>{value.title}</option>
                  )
                })
              }
            </select>
            <button type="submit" onClick={(e) => {
              e.preventDefault();
              reset();
              setFormVisivel(false);
              VideoService.post(values)
             
            }}>
              Cadastrar
            </button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
