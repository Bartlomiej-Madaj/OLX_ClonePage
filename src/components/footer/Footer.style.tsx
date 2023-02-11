import styled from "styled-components";
import { StyledProps } from "../../types/globalType";

type Props = {
  backgroundColor: string | undefined
}

export const StyledFooter = styled.footer<Props>`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: 1fr 0.5fr;

  background-color: ${(props) => props.backgroundColor || props.theme.mainColor};

  & div:first-of-type {
    box-sizing: border-box;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    padding: 2rem;
    text-align: left;
  }

  & > div:last-of-type {
    box-sizing: border-box;
    width: fit-content;
    height: 100%;
    padding: 2rem;
    text-align: center;

    span{
        font-size: 0.7rem;
        color: ${(props: StyledProps) => props.theme.headerColor};
    }
  }

  & > div:first-of-type a {
    display: inline-block;
    width: 100%;
    padding: 0.1rem 0;
  }

  & a {
    display: block;
    font-weight: 600;
    color: ${(props: StyledProps) => props.theme.headerColor};
  }

  & a:hover {
    transform: scale(1.02);
  }

  & img {
    width: 180px;
  }

  @media (max-width: 800px) {
    width: 100%;
    grid-template-columns: 1fr;
    height: fit-content;

    & > div:last-of-type {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      & > span {
        grid-column-start: 1 ;
        grid-column-end: 3 ;
      }
    }
  }

`;
