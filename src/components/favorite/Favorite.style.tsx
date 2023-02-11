import styled from "styled-components";

type Props = {
  active: number;
};

export const StyledFavorite = styled.div<Props>`
  width: 100%;
  box-sizing: border-box;
  padding: 4rem 0 0;
  background-color: white;
  color: ${(props) => props.theme.headerColor};

  h1 {
    padding: 2rem 1rem;
  }

  & > div:first-of-type {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    background-color: white;

    nav {
      box-sizing: border-box;
      width: 70%;
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
        padding: 0 0.5rem;
        color: #adadadc1;
        white-space: nowrap;
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
    box-sizing: border-box;
    width: 100%;
    min-height: 35rem;
    background-color: ${(props) => props.theme.mainColor};
    text-align: center;
    padding: 2rem 1rem;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.4rem;
      text-align: center;
    }
    & > div:first-of-type {
      nav {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;

        a:not(a:last-of-type) {
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
        content: "";
        position: absolute;
        top: 0;
        left: -5rem;
        right: -5rem;
        height: 2px;
        background-color: ${(props) => props.theme.headerColor};
      }
    }
  }
`;
