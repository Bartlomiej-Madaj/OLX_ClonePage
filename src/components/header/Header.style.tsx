import styled from "styled-components";

type Props = {
  isDropMenu: boolean;
};

export const HeaderComponent = styled.nav<Props>`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.headerColor};

  & a img {
    width: 75%;
    min-width: 100px;
  }

  & img:hover {
    cursor: pointer;
  }

  & h6 {
    margin: 0.5rem 0;
  }

  & > div:first-of-type {
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;
    display: flex;
    padding: 0.5rem;

    & a:not(a:last-of-type) {
      display: flex;
      align-items: center;
      margin: 0 0.5rem;
      padding: 0 0.8rem;
      background-color: inherit;
      color: white;

      &:hover {
        color: #437379cd;
      }
      &:hover {
        color: #437379cd;
      }

      & > span {
        padding: 0 0.3rem;
        font-size: 1rem;
        font-weight: 700;
      }
    
  }
  
}

  & > div:first-of-type a:not(a:last-of-type) {
    background-color: transparent;
    margin: 0.2rem 0;
  }

  & > div:first-of-type a:not(a:last-of-type):hover {
    color: #20cee1c4;
    color: #20cee1c4;
    transform: scale(1.02);
  }


  & > div:last-of-type {
    box-sizing: border-box;
    width: 2rem;
    height: 1.4rem;
    padding: 0;
    display: none;
    place-items: center;
    margin-right: 2rem;

    &:hover {
      cursor: pointer;
    }

    div {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      padding: 0;
      height: 0.2rem;
      background-color: grey;
      transition: transform 150ms ease-in;
      ${props => props.isDropMenu && {transform: 'rotate(-45deg)'}}

      &::before {
        content: "";
        position: absolute;
        top: 0.6rem;
        width: 100%;
        padding: 0;
        height: 0.2rem;
        background-color: grey;
        ${props => props.isDropMenu && {transform: ' translateY(-0.6rem) rotate(90deg)'}} ;
      }

      &::after {
        content: "";
        position: ${props => !props.isDropMenu && 'absolute'} ;
        bottom: 0.6rem;
        width: 100%;
        padding: 0;
        height: 0.2rem;
        background-color: grey;
      }
    }
  }


  @media (max-width: 800px) {
    & > div:first-of-type {
      display: none;
      display: ${(props) => props.isDropMenu && "flex"};

      ${(props) =>
        props.isDropMenu && {
          position: "absolute",
          top: "75px",
          left: "0",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#002f34c4",
        }}

      & > a:last-of-type {
        width: 13rem;
        box-sizing: border-box;
        margin: 0 auto 0.5rem;
        text-align: center;
        color: white;
        background-color: #002f34c4 ;
        border: none;
        border-radius: 10px;
        padding: 0.8rem;
        transition: transform 150ms ease-in ;

        &:hover{
          transform: scale(1.04);
        }

        &::before {
          content: "";
          position: absolute;
          background-color: transparent;
        }
      }
    }

    & > div:last-of-type {
      display: grid;
    } 
}
`;
