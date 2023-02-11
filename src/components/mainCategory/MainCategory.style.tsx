import styled from "styled-components";
import { StyledProps } from "../../types/globalType";

export const StyledMainCategory = styled.nav`
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: repeat(auto-fit, max-content);
  grid-auto-columns: auto;
  align-items: flex-start;
  row-gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 1rem;

  & span {
    font-size: 0.8rem;
    font-weight: 700;
    padding-top: 1rem;
    line-height: 1rem;
    color: ${(props: StyledProps) => props.theme.headerColor};
    transition: transform 150ms linear;
  }

  & span:hover {
    transform: scale(1.05);
  }

  & a {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: #e1e1e15b;
    padding: 0.5rem;
    transition: transform 150ms linear;
  }

  & img:hover {
    transform: scale(1.05);
  }
`;

export const StyledWrapCategory = styled.section`
  width: 100%;
  background-color: white;
  color: ${(props: StyledProps) => props.theme.headerColor};

  & h1 {
    text-align: center;
    font-size: 2rem;
    margin: 3rem 0;
  }
`;
