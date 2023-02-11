import styled from 'styled-components';

export const SerachButton = styled.button`
    height: 3rem;
    width: 15%;
    padding: 0 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.headerColor};
    font-size: 1rem;
    font-weight: 600;
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }

  

`