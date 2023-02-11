
import styled from "styled-components";
import * as ReactDOM  from "react-dom";
import { useEffect, useState } from "react";

type Props = {
    image: string
}

const StyledBackground = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    background-image: url(${(props) => props.image});
    background-position: top ;
    background-size: cover; 
    background-repeat: no-repeat;
`;

const Background = () => {
    const [image, setImage] = useState('images/spring.jpg');
   
    let randomNumber = Math.floor(Math.random()* 3)

    let backgroundPath = ['images/forest.jpg', 'images/spring.jpg', 'images/garden.jpg'].find((_, index) => index === randomNumber)

    useEffect(()=> {
        setImage(backgroundPath!)
    }, [image])


    return (
        <>
        {ReactDOM.createPortal(<StyledBackground image={image}/>, document.getElementById('background-root')!)}
        </>
    )
}

export default Background