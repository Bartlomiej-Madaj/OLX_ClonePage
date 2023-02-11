import styled from "styled-components";

export const StyledSearch = styled.form`
  width: 100%;
  height: 6.5rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.mainColor};

  div {
    width: 100%;
    height: 70%;
  }

  button {
    width: 100%;
    height: 70%;
    margin: 0;
    margin-left: auto;
  }

  @media (max-width: 800px) {
    height: 12.5rem;
    grid-template-columns: 1fr;
    gap: 0.2rem;

    div {
      height: 100%;
    }

    button {
      width: 100%;
      height: fit-content;
    }
  }
`;
