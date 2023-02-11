import React from "react";
import { FlagIcon, HeartIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { newAdvertisement } from "../../types/globalType";
import {
  StyledAnnouncementContact,
  StyledAnnouncementDescription,
} from "./Announcement.style";
import { useGetDate } from "../../hooks/useGetDate";

const SmallFlagIcon = styled(FlagIcon)`
  height: 1.2rem;
`;

const SmallHeartIcon = styled(HeartIcon)`
  height: 1.5rem;
  position: absolute;
  top: 0;
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

type Props = {
  data: newAdvertisement;
};

function Announcement(props: Props) {
  const { data } = props;

  const date = useGetDate(data.date);

  const currencyPrice = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(Number(data.price));

  return (
    <>
      <StyledAnnouncementDescription>
        <span>Dodane: {date}</span>
        <h1>{data.title}</h1>
        <div>
          <h2>{data.price && currencyPrice}</h2>
          <span>{data.price && data.isNegotiating && "Do negocjacji"}</span>
        </div>
        <h2> {data.description && "OPIS"}</h2>
        <article>{data.description}</article>
        <hr />
        <div>
          <span>ID: 805614210</span>
          <span>Wyświetlenia: 82</span>
          <div>
            <SmallFlagIcon />
            <span>Zgłoś</span>
          </div>
        </div>
        <SmallHeartIcon />
      </StyledAnnouncementDescription>
      <StyledAnnouncementContact>
        <h1>Kontakt</h1>
        <div>
          <div>
            <img src="/images/userImage.png" alt="" />
            <span>{data.userName}</span>
          </div>
          <div>
            <span>
              <strong>Lokalizacja:</strong> {data.location || "Brak"}
            </span>
            <span>
              <strong>Adres email:</strong> {data.email || "Brak"}
            </span>
            <span>
              <strong>Numer telefonu:</strong> {data.phoneNumber || "Brak"}
            </span>
          </div>
        </div>
      </StyledAnnouncementContact>
    </>
  );
}

export default Announcement;
