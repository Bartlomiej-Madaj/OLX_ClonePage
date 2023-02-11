import React, { useState } from "react";
import { StyledAdvertisement } from "./Advertisement.style";
import { HeartIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InfoTitle from "../UI/InfoTitle";
import { useGetDate } from "../../hooks/useGetDate";

const SmallHeartIcon = styled(HeartIcon)`
  height: 1.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1.5rem;
  color: #686868;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.headerColor};
  }

  &:active {
    transform: scale(1.2);
  }
`;
interface Props {
  id: string;
  title: string;
  image: string | undefined;
  price: string;
  location: string;
  date: number;
}

const Advertisement: React.FC<Props> = (props) => {
  const [showTitle, setShowTitle] = useState(false);

  const currencyPrice = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(Number(props.price));

  const showWholeTitle = () => {
    setShowTitle(true);
  };

  const removeWholeTitle = () => {
    setShowTitle(false);
  };

  const date = useGetDate(props.date);

  return (
    <StyledAdvertisement>
      <img src={props.image} alt={props.title} />
      <Link
        onMouseOver={showWholeTitle}
        onMouseOut={removeWholeTitle}
        to={`/${props.id}/${props.title}`}
      >
        <h3>{props.title}</h3>
      </Link>
      {showTitle && <InfoTitle title={props.title} />}
      <span>{props.location}</span>
      <span>Data dodania: {date}</span>
      <h3>{currencyPrice}</h3>
      <SmallHeartIcon />
    </StyledAdvertisement>
  );
};

export default Advertisement;
