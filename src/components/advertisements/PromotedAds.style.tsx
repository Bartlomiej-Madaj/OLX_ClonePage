import React from "react";
import styled from "styled-components";
import { StyledProps } from "../../types/globalType";

// type Props = {
//   children: React.ReactNode;
// };

export const StyledPromotedAds = styled.section`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 4rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, calc(200px + 2rem));
  justify-content: center;
  gap: 1.2rem;
  grid-auto-columns: auto;
`;

export const StyledWrapPromotedAds = styled.div`
  width: 100%;
  background-color: ${(props: StyledProps) => props.theme.mainColor};
  color: ${(props: StyledProps) => props.theme.headerColor};

  & h1 {
    position: relative;
    width: 100%;
    top: 0;
    text-align: center;
    margin: 3rem 0;
  }
`;
