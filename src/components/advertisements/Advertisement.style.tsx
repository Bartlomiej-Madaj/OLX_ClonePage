import styled from "styled-components";

export const StyledAdvertisement = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 1rem;
  color: ${(props) => props.theme.headerColor};
  border-radius: 20px;
  text-align: left;
  -webkit-box-shadow: 9px 6px 14px -1px rgba(0, 47, 52, 1);
  -moz-box-shadow: 9px 6px 14px -1px rgba(0, 47, 52, 1);
  box-shadow: 9px 6px 14px -1px rgba(0, 47, 52, 1);

  & img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    margin: 0 auto;
    -webkit-box-shadow: 7px 7px 15px -7px rgba(66, 68, 90, 1);
    -moz-box-shadow: 7px 7px 15px -7px rgba(66, 68, 90, 1);
    box-shadow: 7px 7px 15px -7px rgba(66, 68, 90, 1);
  }

  & a h3 {
    display: inline-block;
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    font-weight: 500;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: underline;
    }
  }

  & span {
    height: fit-content;
    font-size: 0.7rem;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    line-height: 1rem;
    padding-bottom: 0.5rem;
  }

  & h3:last-of-type {
    display: block;
    width: 100%;
    font-size: 1rem;
    margin: 0.8rem 0;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
