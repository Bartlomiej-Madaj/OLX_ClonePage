import React, { ReactNode, useState } from "react";
import { StyledAdvertisement } from "./Advertisement.style";
// import { Advertisements } from './PromotedAds';
import { HeartIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InfoTitle from "../UI/InfoTitle";

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
  date: string;
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

  // const wholeTitle = <h3 className='wholeTitle'>{props.title}</h3>

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
      <span>
        {props.location} -{" "}
        <time dateTime={props.date} datatype="">
          {props.date}
        </time>
      </span>
      <h3>{currencyPrice}</h3>
      <SmallHeartIcon />
    </StyledAdvertisement>
  );
};

export default Advertisement;
