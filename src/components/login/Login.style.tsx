import styled from "styled-components";

type Props = {
  activeLogin: boolean;
  activeRegistration: boolean;
};

export const StyledLogin = styled.div<Props>`
  width: 25rem;
  height: fit-content;
  box-sizing: border-box;
  position: relative ;
  top: ${(props) => (props.activeLogin ? "50%" : "10%")};
  left: 50%;
  z-index: 1;
  transform: ${(props) =>
    props.activeLogin ? "translate(-50%, -50%)" : "translate(-50%, -1%)"};
  background-color: white;

  button {
    cursor: pointer;
  }

  & > div:first-of-type {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    display: flex;
    border: none;
    margin-bottom: 20px;

    border-bottom: 1px solid #989898;

    button:first-of-type {
      box-sizing: border-box;
      width: 50%;
      border: none;
      padding: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
      background-color: inherit;
      ${(props) => props.activeLogin && "border-bottom: 2px solid #606060"};
    }

    button:last-of-type {
      box-sizing: border-box;
      width: 50%;
      border: none;
      padding: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
      background-color: inherit;

      ${(props) =>
        props.activeRegistration && "border-bottom: 2px solid #606060"};
    }

    button:focus {
      border-bottom: 2px solid #606060;
      outline: none;
    }
  }
`;
