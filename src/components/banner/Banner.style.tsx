import styled from "styled-components";
import { StyledProps } from "../../types/globalType";

export const StyledBanner = styled.div`
box-sizing: border-box;
    width: 100%;
    height: 12rem;
    overflow: hidden;
    background-color: ${(props: StyledProps) => props.theme.headerColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    & img {
        width: 200px;
        height: 100px;
    }

    & div {
        display: flex;
        flex-direction: column;
        
        span {
            font-weight: 600;
        }

        span:first-of-type {
            color:grey;
        }

        span:last-of-type {
            color:white;
        }
    }


    @media (max-width: 800px) {
        height: fit-content;
        display: flex;
        flex-direction: column;
        &  * {
            padding: 0.3rem;
        }
    }
`;