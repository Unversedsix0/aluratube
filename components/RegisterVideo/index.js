import React, { useState } from 'react'
import { StyledRegisterVideo } from './style'

const RegisterVideo = () => {
  const [formVisivel, setFormVisivel] = useState(false)

  return (
    <StyledRegisterVideo>
      <button className='add-video' onClick={() => setFormVisivel(true)}>
        +
      </button>
      {
        formVisivel && (
          <form>
            <div>
              <button className='close-modal' onClick={() => setFormVisivel(false)}>
                X
              </button>
              <input placeholder='Título do Vídeo'/>
              <input placeholder='URL'/>
              <button type='submit'>
                Cadastrar
              </button>
            </div>
          </form>
        )
      }
    </StyledRegisterVideo>
  )
}

export default RegisterVideo
