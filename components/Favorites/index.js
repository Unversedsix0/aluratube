import styled from "styled-components"

const StyledFav = styled.div`
  width: 100vw;
  height: 9rem;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 3rem;
  
  a {
    margin-left: 2rem;
    border-radius: 50%;
    
    .img {
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;

      img {
        height: 100%;
      }
    }
    span {
      color: ${({ theme }) => theme.textColorBase || "#222"};
      display: flex;
      width: 100%;
      justify-content: center;
      text-align: center;
      margin-top: 0.8rem;
    }
  }
`

export const Favorites = (props) => {

  const { fav } = props
  
  return (
    <>
      <h2 style={{ marginLeft: '2rem' }}>Favoritos</h2>
      <StyledFav>
        {
          fav.map((value, id) => {
            
            return (
              <a key={id} href={value.url}>
                <div className="img">
                  <img src={value.thumb} />
                </div>
                <span>{value.canal}</span>
              </a>
            )
          })
        }
      </StyledFav>
    </>
  )
}
