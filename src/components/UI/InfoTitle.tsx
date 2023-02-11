import React from 'react';
import styled from 'styled-components';

type Props = {
    title: string,
}

function InfoTitle(props: Props) {
  return (
    <StyledInfoTitle>{props.title}</StyledInfoTitle>
  )
}

const StyledInfoTitle = styled.p`
    position: absolute;
    box-sizing: border-box;
    padding: 0.5rem;
    background-color: #929292e6;
    border-radius: 10px;
    bottom: 10.5rem;
    left:-1rem;
    right:-1rem;
    color: ${props => props.theme.headerColor};

    &::before {
        content: '';
        width: 0.7rem;
        height: 0.7rem;
        left: 50%;
        bottom: -0.3rem;
        position: absolute;
        background-color: #929292;
        transform: rotate(45deg);
    }
`

export default InfoTitle