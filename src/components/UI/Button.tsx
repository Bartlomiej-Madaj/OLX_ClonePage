import styled from "styled-components";

type Props = {
  border?: string;
  background?: string;
};

export const Button = styled.button<Props>`
  height: fit-content;
  margin: auto 0;
  margin-right: 0.5rem;
  padding: 0.6rem;
  border: 2px solid
    ${(props) => (props.border === "true" ? props.theme.headerColor : "white")};
  color: ${(props) =>
    props.background === "true" ? "white" : props.theme.headerColor};
  background-color: ${(props) =>
    props.background === "true" ? props.theme.headerColor : "white"};
  font-weight: 800;
  font-size: 1rem;
  border-radius: ${(props) => (props.border === "true" ? "0.8rem" : "none")};
  position: relative;
  transition: all 300ms ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1rem;

  &::before {
    content: "";
    width: 110%;
    height: 120%;
    background-color: white;
    position: absolute;
    top: -10%;
    left: -5%;
    z-index: -1;
    border-radius: 5px;
    margin: auto 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.headerColor};
    color: white;
    border-radius: ${(props) => (props.border === "true" ? "0.8rem" : "none")};
    cursor: pointer;
  }
`;

export const GreenButton = styled.button`
  width: 100%;
  margin-right: auto;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.headerColor};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1.01);
  }
`;
