import React from 'react'
import styled, { keyframes } from 'styled-components'

function LoadingStuff() {
  return (
    <StyledLoading>
        <div></div>
        <span>Loading...</span>
        
    </StyledLoading>
  )
}

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

`;

const StyledLoading = styled.div`
    width: 100%;
    height: 10rem;
    box-sizing: border-box;
    margin-bottom: 6rem;
    position: relative;

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        font-size: 1.2rem;
        font-weight: 600;
        font-style: italic;

    }

    div {
        position: relative;
        z-index: 1;
        width: 10rem;
        height: 10rem;
        background-color: #000000;
        margin: 0 auto;
        border-radius: 50%;
        animation: ${rotate} 3s infinite linear ;
    }


    div::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: -1rem;
        left: -1rem;
        width: 12rem;
        height: 12rem;
        background-color: ${props => props.theme.mainColor};
        border-radius: 50%;
        box-shadow: 6px -1px 4px 2px ${props => props.theme.headerColor} inset;
    }


`;



export default LoadingStuff