import styled from "styled-components";

export const StyledAnnouncementDescription = styled.section`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  height: fit-content;
  margin: 2rem 0;
  padding: 1rem;
  background-color: white;
  color: ${(props) => props.theme.headerColor};
  -webkit-box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);
  box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);

  & span {
    font-size: 0.9rem;
    color: #777777;
  }

  & div:first-of-type {
    display: flex;
    align-items: flex-end;
    margin-bottom: 4rem;

    h2:first-of-type {
      margin: 0;
      font-size: 2rem;
    }

    span {
      padding-left: 1rem;
      font-size: 1.2rem;
      color: #777777;
    }
  }

  & article {
    margin-bottom: 2rem;
  }

  & h1 {
    font-size: 1.7rem;
    font-weight: 500;
  }

  & div:last-of-type {
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  & div:last-of-type div {
    height: fit-content;
    display: flex;
    align-items: center;
    margin: 0;
    color: #ff5e00;
    position: relative;
    cursor: pointer;

    span {
      font-size: 0.9rem;
      color: #ff5e00;
      padding-left: 0.2rem;
    }

    span::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2px;
      width: 30%;
      background-color: #ff5e00;
      transition: width 250ms ease-in;
    }
  }

  & div:last-of-type div:hover span::before {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: #ff5e00;
  }
`;

export const StyledAnnouncementContact = styled.section`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  height: fit-content;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: white;
  color: ${(props) => props.theme.headerColor};
  -webkit-box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);
  box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);

  h1 {
    margin-top: 0.8rem;
    font-size: 1.7rem;
  }
  & > div {
    width: 100%;
    display: flex;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    & > div:first-of-type {
      box-sizing: border-box;
      width: 40%;
      text-align: center;
      display: flex;
      align-items: center;

      img {
        display: block;
        box-sizing: border-box;
        width: 40%;
        max-width: 90px;
        object-fit: contain;
        padding: 0.2rem;
        border: 2px solid ${(props) => props.theme.headerColor};
        border-radius: 50%;
        aspect-ratio: 1/1;
      }

      span {
        padding-left: 1rem;
        font-weight: 600;
      }
    }

    & div:last-of-type {
      width: 50%;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;

      span {
        text-align: left;
        font-size: 0.9rem;
        color: #777777;
      }
    }
  }
`;
