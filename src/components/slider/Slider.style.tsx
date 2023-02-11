import styled from "styled-components";

type Props = {
  slidePath: string | undefined;
};

export const StyledSlider = styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  padding: 1rem;
  background-color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);
  box-shadow: 7px 7px 21px -8px rgba(66, 68, 90, 1);

  & > div:first-of-type {
    width: 90%;
    height: 20rem;
    max-width: 500px;
    background-image: url(${(props) => props.slidePath});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;

    button {
      position: absolute;
      padding: 0.2rem 0.6rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
      background-color: #00191c86;
      border-radius: 5px;
      border: none;
      transition: all 100ms ease-in;
    }

    button:hover,
    button:active {
      cursor: pointer;
      transform: translateY(-50%) scale(1.04);
    }

    button:active {
      cursor: pointer;
      transform: translateY(-50%) scale(1.08);
      background-color: #00191cbb;
    }

    button:first-of-type {
      left: 2%;
    }

    button:last-of-type {
      right: 2%;
    }
  }

  & div:last-of-type {
    width: fit-content;
    height: 15px;
    margin: 0 auto;

    span {
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      margin: 0.3rem;
      border: solid 1px #393939a7;
      border-radius: 50%;
      transition: background-color 100ms ease-in;
    }

    span:hover {
      background-color: #3939396c;
      cursor: pointer;
    }

    span:active {
      background-color: #000000a2;
      cursor: pointer;
    }
  }
`;

type PropsDot = {
  activeSlide: boolean;
};

export const StyledDot = styled.span<PropsDot>`
  background-color: ${(props: PropsDot) => props.activeSlide && "#3939396c"};
`;
