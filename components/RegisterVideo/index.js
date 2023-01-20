import { useState } from "react";
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



const RegisterVideo = () => {

  const [formVisivel, setFormVisivel] = useState(false);
  const { values, handleChange, reset } = useForm({
    defaultValues: { titulo: "Teste ", url: "https://www.youtube.com/watch?v=0oJQUs5oRiM" },
  });
  
 

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
            <button type="submit" onClick={(e) => {
              e.preventDefault();
              reset();
              setFormVisivel(false);
              supabase.from('Video').insert({
                title:values.titulo,
                url:values.url,
                thumb:'https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg'
              })

              .then((response)=>{
                 console .log(response);
              })
              .catch((error)=>{
                console.log("Eita",error);
              })

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
