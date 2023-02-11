import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

function Wrapper(props: Props) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 95%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  margin: 0 auto;
  padding-top: 200px;
`;

export default Wrapper;
