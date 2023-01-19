import styled from "styled-components"

const StyledFav = styled.div`
  width: 100vw;
  height: 9rem;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow-x: hidden;
  
  .img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 2rem;
    cursor: pointer;

    img {
      height: 100%;
      scale: 1.3;
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
              <div key={id}>
                <div className="img">
                  <img src={value.thumb} title={value.canal} />
                </div>
              </div>
            )
          })
        }
      </StyledFav>
    </>
  )
}
