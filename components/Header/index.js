import React from "react";
import config from "../../config.json";
import styled from "styled-components";

const StyledHeader = styled.div`

  .banner{
    margin-top: 24px;
    width: 100%;
    height: 20rem;
  }
  .user-foto {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

export const Header = () => {
  
  return (
    <StyledHeader>
      <div>
        <img className="banner" src={config.banner} />
      </div>

      <section className="user-info">
        <img  className="user-foto" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
};
