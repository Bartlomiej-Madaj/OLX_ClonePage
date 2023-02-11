import styled from "styled-components";

type Props = {
  active: number;
};

export const StyledMessages = styled.div<Props>`
  width: 100%;
  box-sizing: border-box;

  & > div:first-of-type {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 7rem 1rem 0;
    background-color: white;

    h1 {
      margin: 0;
    }

    & > div {
      display: flex;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;

        span {
          font-size: 0.8rem;
          text-align: right;
        }
      }

      button {
        width: 9rem;
        font-size: 0.8rem;
        border-radius: 0.8rem;
      }
      button:last-of-type {
        width: 11rem;
        margin: 0;
      }

      button:last-of-type:hover {
        border: 2px solid ${(props) => props.theme.headerColor};
        background-color: white;
        color: ${(props) => props.theme.headerColor};
      }
    }
  }

  & > div:nth-child(2) {
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
    background-color: white;

    a {
      width: fit-content;
      position: relative;
      display: block;
      margin-left: auto;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }

    a::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40%;
      height: 2px;
      background-color: ${(props) => props.theme.headerColor};
      transition: width 250ms ease-in;
    }

    a:hover::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.headerColor};
    }
  }

  & > div:nth-child(3) {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    background-color: white;

    nav {
        box-sizing: border-box;
      width: 80%;
      max-width: 50rem;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 1.5rem 1rem 0;
      box-sizing: border-box;

      a {
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        height: 1.8rem;
        color: #adadadc1;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: color 150ms ease-in, border 150ms ease-in;
      }

      a:nth-child(${(props) => props.active}) {
        color: ${(props) => props.theme.headerColor};
        border-bottom: 2px solid ${(props) => props.theme.headerColor};
      }

      a:hover {
        color: ${(props) => props.theme.headerColor};
        border-bottom: 2px solid black;
      }
    }

  }

  & > div:last-of-type {
    text-align: center;
    margin: 1rem 1rem 6rem;
    padding: 1rem 1rem 4rem;
    background-color: white;
  }

  @media (max-width: 800px) {
    & > div:first-of-type {
      display: grid;
      grid-template-columns: 1fr;
      h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      & > div {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.2rem;
        position: relative;
        justify-items: flex-start;
        padding-bottom: 0.5rem;

        button {
          margin: 0;

        }

        div {

          span{
            text-align: left;
          }
        }
      }
    }

    & > div:nth-child(2) {

      a {
        margin: 0;
        margin-right: auto;
      }
    }
    & > div:nth-child(3) {
    
    nav {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 auto;

      a:not(a:last-of-type){
        display: grid;
        place-items: center;
      }

      a:last-of-type {
        display: grid;
        justify-content: center;
        grid-auto-flow: column;
        
      }
    }

    nav:before {
      content: '';
      position: absolute;
      top: 15px;
      left: -5rem;
      right: -5rem;
      height: 2px;
      background-color: ${props => props.theme.headerColor};
    }

  }


  }


`;
