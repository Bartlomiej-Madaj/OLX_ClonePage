import styled from "styled-components";

export const StyledAbout = styled.section`
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(35, 229, 219);
  text-align: center;
  padding: 1rem;


  & article {
    max-width: 700px;
    margin: 0 auto;
  }

  & span {
    display: block;
    margin-top: 1rem;
  }

  & span ~ a img {
    width: 5rem;
    padding: 0.8rem;
    /* margin: 1rem 0.5rem 0; */
  }

  & span ~ a img:hover {
    transform: scale(1.07);

    cursor: pointer;
  }

  @media (max-width: 485px) {
    & span ~ a   {
      width: 20% ;
      display: inline-block;
    }
  }

`;
