import styled from "styled-components";

export const StyledRegistrationPanel = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  button {
    cursor: pointer;
  }

  & > div:first-of-type {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem 0.3rem;

    span:first-of-type,
    span:last-of-type {
      width: 40%;
      height: 1px;
      background-color: #989898;
    }

    span:nth-child(2) {
      display: inline-block;
      width: 20%;
      font-size: 0.8rem;
      font-weight: 600;
      text-align: center;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    height: fit-content;

    & > span {
      color: red;
      height: 2rem;
      font-size: 0.9rem;
      padding-left: 2rem;
    }

    div:has(label) {
      display: flex;
      flex-direction: column;
      padding: 0 2rem;
      height: 7.5rem;
      justify-self: center;

      label {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        text-align: left;
      }

      input {
        padding: 1rem;
        border: none;
        border-radius: 0.3rem;
        background-color: #f1f1f1db;
      }
      span {
        display: block;
        color: red;
        font-size: 0.9rem;
        padding-top: 0.5rem;
      }
    }

    div:nth-of-type(3) {
      width: 100%;
      height: fit-content;
      padding: 1rem 2rem 0;
      font-size: 0.75rem;
      display: flex;
      flex-direction: column;

      & > span {
        display: inline-block;
        padding-bottom: 1rem;
      }

      & > div:first-of-type {
        width: 100%;
        display: grid;
        grid-template-columns: 2rem 1fr;
        height: fit-content;
        flex-wrap: wrap;

        span:first-of-type {
          display: block;
          width: 100%;
          grid-column: span 2;
          padding-bottom: 1rem;
          color: red;
        }
        input {
          display: inline-block;
          width: 1.5rem;
          align-self: flex-start;
          justify-self: center;
          grid-row: 2/3;
        }

        span:last-of-type {
          padding: 0 1rem;
          display: inline-block;
          grid-row: 2/3;
          color: black;
        }
      }
      div:last-of-type {
        width: 80%;
        box-sizing: border-box;
        padding: 1rem 0;
        margin: 0 auto;
        padding-bottom: 2rem;
      }
    }
  }
`;
