import styled from "styled-components";

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 80%;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem auto;
  background-color: inherit;
  border-radius: 0.3rem;

  img {
    width: 40px;
    margin-right: 1rem;
  }

  &:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
