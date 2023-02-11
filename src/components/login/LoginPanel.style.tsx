import styled from "styled-components";

export const StyledLoginPanel = styled.div`
  button {
    cursor: pointer;
  }

  & form {

    & > span {
      display: inline-block;
      width: 100%;
      font-size: 0.9rem;
      color: red;
      text-align:center;
    }

    div {
      height: 8rem;
      display: flex;
      flex-direction: column;
      padding: 1rem 2rem;

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

      input+span {
        display: inline-block;
        color: red;
        font-size: 0.9rem;
        padding-top: 0.5rem;
      }
    }

    div:last-of-type {
      width: 80%;
      box-sizing: border-box;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      span {
        display: block;
        font-size: 0.9rem;
        text-align: left;
        padding-bottom: 1rem;
      }

    }
  }

  & > div:last-of-type {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      span:first-of-type,
      span:last-of-type {
        display: inline-block;
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

    button ~ span {
      box-sizing: border-box;
      width: 80%;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 0.7rem;
      text-align: center;
      line-height: 1rem;
    }
  }
`;
