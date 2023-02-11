import styled, { keyframes } from "styled-components";

const innerAppearance = keyframes`
  0% {
    width: 0;
    height: 0;
  }

  80% {
    width: 60rem;
    height: 60rem;
  }

  100% {
    width: 52rem;
    height: 52rem;
  }
`;

const externalAppearance = keyframes`
  0% {
    width: 0;
    height: 0;
  }

  80% {
    width: 75rem;
    height: 75rem;
  }

  100% {
    width: 70rem;
    height: 70rem;
  }
`;

type Props = {
  activeValue: boolean
}

export const StyledLoginPage = styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #3a77ff;
  overflow-y: ${props => props.activeValue ? 'scroll' : 'hidden'};
  overflow-x: hidden;

  &::before {
    content: "";
    width: 70rem;
    height: 70rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${externalAppearance} 1500ms linear;
    background-color: #b4ccff;
    border-radius: 50%;
  }

  &::after {
    content: "";
    width: 52rem;
    height: 52rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${innerAppearance} 1500ms linear;
    background-color: #3a77ff;
    border-radius: 50%;
  }
`;
