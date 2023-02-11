import React, { useState } from "react";
import { StyledMessages } from "./Messages.style";
import { InformationCircleIcon, TruckIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

type Props = {
  mobile: string;
};

const SmallInformationCircleIcon = styled(InformationCircleIcon)<Props>`
  height: 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;

  @media (max-width: 800px) {
    ${(props) =>
      props.mobile && {
        position: "absolute",
        top: "0.6rem",
        left: "8rem",
      }}

    position: "absolute";
    top: "0.6rem";
    left: "8rem";
  }
`;

const SmallTruckIcon = styled(TruckIcon)`
  height: 1.5rem;
  padding-right: 0.2rem;
`;

const dummyArr = [
  "Ogłoszenia",
  "Wiadomości",
  "Płatności",
  "Szukam pracy",
  "Ustawienia",
  `Twoje przesyłki`,
];

function Messages() {
  const [active, setActive] = useState<number>(2);

  const activeButton = (id: number) => {
    setActive(id + 1);
  };

  return (
    <StyledMessages active={active}>
      <div>
        <h1>Wiadomości</h1>
        <div>
          <div>
            <span>Stan konta: 0zł</span>
            <span>Dostępne punkty: 0pkt</span>
          </div>
          <SmallInformationCircleIcon mobile="true" />
          <Button border={"true"}>Uzupełnij Portfel</Button>
          <Button background={"true"}>Kup pakiet ogłoszeń</Button>
        </div>
      </div>
      <div>
        <a>Dowiedz się więcej</a>
      </div>
      <div>
        <nav>
          {dummyArr.map((item, index) => (
            <Link to="#" onClick={activeButton.bind(null, index)} key={index}>
              {item === "Twoje przesyłki" && <SmallTruckIcon />} {item}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <img src="/images/message.PNG" alt="icon" />
        <h3>Dogadasz się dzięki Wiadomościom OLX</h3>
        <span>
          To najbezpieczniejsza metoda kontaktu z innymi użytkownikami.
          Korzystaj z Wiadomości OLX, aby przesyłać zdjęcia oraz informacje
          kontaktowe i dogadywać się na zakup lub sprzedaż.
        </span>
        <span>
          Aby rozpocząć rozmowę z innymi użytkownikami,
          <a href="#">poszukaj czegoś </a> lub <a>dodaj ogłoszenie</a> na OLX.
        </span>
      </div>
    </StyledMessages>
  );
}

export default Messages;
