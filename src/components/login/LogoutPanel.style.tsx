import styled from "styled-components";

export const StyledLogoutPanel = styled.section`
    width: min(80%, 35rem);
    box-sizing: border-box;
    height: fit-content;
    position: absolute;
    z-index: 3;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    color: ${props => props.theme.headerColor };

    button {
        width: clamp(150px, 50% , 20rem) ;
        margin: 0 auto;
        margin-bottom: 2rem;
        border-radius: 1rem;
    }

`;