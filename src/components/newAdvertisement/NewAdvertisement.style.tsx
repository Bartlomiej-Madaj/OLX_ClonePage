import styled from "styled-components";
import { StyledProps } from "../../types/globalType";

type Props = {
  disabled: boolean;
  advertisementViewIsShown: boolean;
};

export const StyledNewAdvertisement = styled.form<Props>`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  height: ${(props) => props.advertisementViewIsShown && "100vh"};
  overflow: ${(props) => props.advertisementViewIsShown && "hidden"};
  margin: 0 auto;
  color: ${(props: StyledProps) => props.theme.headerColor};

  input {
    color: ${(props: StyledProps) => props.theme.headerColor};
  }

  & > div:nth-of-type(1),
  section {
    box-sizing: border-box;
    width: 100%;
    background-color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 16px 14px -12px rgba(66, 68, 90, 1);

    h3 {
      margin: 0.5rem 0;
    }

    div {
      width: 100%;
      height: 7rem;
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;

      label {
        padding-bottom: 0.4rem;
      }

      input,
      select {
        box-sizing: border-box;
        width: 60%;
        min-width: 300px;
        /* margin-bottom: 1rem; */
        padding: 1rem;
        font-size: 1rem;
        background-color: ${(props: StyledProps) => props.theme.mainColor};
        border: none;
        border-radius: 5px;
      }

      input:focus {
        outline: none;
        border-bottom: 2px solid black;
      }

      label > span {
        font-size: 0.75rem;
        color: black;
      }

      span {
        color: red;
      }
    }
  }

  & > div:nth-of-type(2) {
    width: 100%;
    box-sizing: border-box;
    /* border: 1px solid black; */
    background-color: white;
    padding: 1rem;
    padding-bottom: 3rem;
    margin-bottom: 2rem;
    box-shadow: 0 16px 14px -12px rgba(66, 68, 90, 1);

    h3 {
      margin: 0.5rem 0;
    }

    span {
      display: inline-block;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    & > div {
      box-sizing: border-box;
      max-width: 850px;
      display: grid;
      padding: 2rem;
      grid-template-columns: repeat(auto-fit, 200px);
      grid-auto-flow: row;
      gap: 1rem;
      background-color: white;

      div {
        box-sizing: border-box;
        width: 200px;
        height: 150px;
        display: grid;
        place-items: center;
        background-color: ${(props) => props.theme.mainColor};
        transition: transform 100ms ease-in;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      div:not(div:first-of-type):hover {
        transform: scale(1.03);
        cursor: pointer;
      }

      div:first-of-type {
        background-color: white;
        display: flex;
        flex-direction: column;

        button {
          width: 100%;
          display: inline-block;
          position: relative;
          background-color: rgb(255, 251, 239);
          border: 2px solid rgb(255, 239, 191);
          border-radius: 0.5rem;
          color: ${(props) => props.theme.headerColor};
          padding: 1rem;
          margin: 0.5rem 0;
          text-align: center;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          &::before {
            content: "";
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translate(-50%);
            width: 100px;
            height: 2px;
            background-color: ${(props: StyledProps) =>
              props.theme.headerColor};
          }
        }

        input {
          display: none;
        }
      }
    }
  }

  & > div:nth-of-type(3) {
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 16px 14px -12px rgba(66, 68, 90, 1);

    div:first-of-type {
      label {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }

      textarea {
        box-sizing: border-box;
        padding: 1rem;
        width: 80%;
        min-width: 300px;
        max-width: 40rem;
        height: 300px;
        background-color: ${(props: StyledProps) => props.theme.mainColor};
        border: none;
        font-size: 1rem;
        color: ${(props: StyledProps) => props.theme.headerColor};
      }

      textarea:focus,
      textarea:focus-visible {
        box-sizing: border-box;
        outline: none;
        border-bottom: 3px solid ${(props) => props.theme.headerColor};
      }
      span {
        display: block;
        color: red;
        font-size: 0.9rem;
      }
    }

    div:last-of-type {
      width: 80%;
      max-width: 40rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      padding: 1rem 0;

      span:last-of-type {
        display: block;
        margin-left: auto;
      }
    }
  }

  & > div:nth-of-type(4) {
    box-sizing: border-box;
    width: 100%;
    height: 10rem;
    background-color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 16px 14px -12px rgba(66, 68, 90, 1);

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;

      label {
        padding-bottom: 0.4rem;
      }

      input {
        box-sizing: border-box;
        width: 60%;
        min-width: 300px;
        margin-bottom: 0.5rem;
        padding: 1rem;
        font-size: 1rem;
        background-color: ${(props: StyledProps) => props.theme.mainColor};
        border: none;
        border-radius: 5px;
      }

      input:focus {
        outline: none;
        border-bottom: 2px solid black;
      }

      span {
        display: block;
        color: red;
        font-size: 0.9rem;
      }
    }
  }

  & > div:nth-of-type(5) {
    /* border: 1px solid black; */
    box-sizing: border-box;
    background-color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 16px 14px -12px rgba(66, 68, 90, 1);

    h3 {
      margin: 0.5rem 0;
    }

    div {
      box-sizing: border-box;
      width: 100%;
      height: 6.5rem;
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;

      label {
        padding-bottom: 0.4rem;
      }

      input {
        box-sizing: border-box;
        width: 40%;
        min-width: 300px;
        padding: 1rem;
        font-size: 1rem;
        background-color: ${(props: StyledProps) => props.theme.mainColor};
        border: none;
        border-radius: 5px;
      }

      input:focus {
        outline: none;
        border-bottom: 2px solid black;
      }

      span {
        display: block;
        color: red;
        font-size: 0.9rem;
      }
    }
  }

  & > div:nth-of-type(6) {
    box-sizing: border-box;
    width: 100%;
    height: 7rem;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, minmax(1fr, 5rem));
    grid-template-rows: 1fr, 1fr;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 16px 14px -12px rgba(66, 68, 90, 1);

    span {
      display: block;
      font-size: 0.9rem;
      grid-column: 2/4;
      grid-row: 1/2;
      justify-self: flex-end;
      padding: 0.5rem 0;
    }

    button:first-of-type {
      width: 200px;
      position: relative;
      z-index: 0;
      grid-column: 2/3;
      justify-self: flex-end;
      padding: 0.8rem;
      color: ${(props: StyledProps) => props.theme.headerColor};
      background-color: white;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;

      &::before {
        content: "";
        width: 40%;
        height: 2px;
        position: absolute;
        z-index: 1;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%);
        background-color: ${(props: StyledProps) => props.theme.headerColor};
        transition: width 250ms ease-in;
      }

      &:hover::before {
        content: "";
        width: 90%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 50%;
        bottom: 5px;
        transform: translate(-50%);
        background-color: ${(props: StyledProps) => props.theme.headerColor};
      }
    }

    button:last-of-type {
      width: 10rem;
      grid-column: 3/4;
      justify-self: flex-end;
      margin: 0;
      margin-left: 1rem;
      cursor: ${(props) => (!props.disabled ? "not-allowed" : "pointer")};
      background-color: ${(props) =>
        !props.disabled ? "#455850" : props.theme.headerColor};
    }

    button:last-of-type:active {
      transform: scale(${(props) => (!props.disabled ? "1.0" : "1.01")});
    }

    button:last-of-type:hover {
      transform: scale(${(props) => (!props.disabled ? "1.0" : "1.01")});
    }
  }

  @media (max-width: 800px) {
    & > div:nth-of-type(1),
    section {
      div {
        input,
        select {
          width: 100%;
        }
      }
    }

    & > div:nth-of-type(2) {
      div {
        justify-content: center;

        div {
          margin: 0 auto;
        }
      }
    }

    & > div:nth-of-type(3) {
      width: 100%;
      div:first-of-type {
        width: 100%;
        textarea {
          width: 100%;
        }
      }

      div:last-of-type {
        width: 100%;
        margin: 0;
      }
    }

    & > div:nth-of-type(4),
    & > div:nth-of-type(5) {
      div {
        input {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 500px) {
    & > div:nth-of-type(2) {
      div {
        grid-template-columns: 1fr;

        div {
          margin: 0 auto;
        }
      }
    }
  }
`;
