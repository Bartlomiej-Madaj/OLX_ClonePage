import React from "react";
import { StyledBanner } from "./Banner.style";
import styled from "styled-components";

function Banner() {
  return (
    <StyledBanner>
      <img src="/images/chart.png" alt="" />
      <div>
        <span>Wyróżnij się jako firm!</span>
        <span>Poznaj ofertę OLX dla biznesu</span>
      </div>
      <BannerButton>Zobacz szczegóły</BannerButton>
    </StyledBanner>
  );
}

const BannerButton = styled.button`
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.headerColor};
  border-radius: 10px;
  background-color: white;
  color: ${(props) => props.theme.headerColor};
  font-size: 1rem;
  font-weight: 600;
  transition: all 250ms ease-in;

  &:hover {
    box-sizing: border-box;
    border-radius: 10px;
    background-color: ${(props) => props.theme.headerColor};
    color: white;
    border: 2px solid white;
    cursor: pointer;
  }
`;

export default Banner;
