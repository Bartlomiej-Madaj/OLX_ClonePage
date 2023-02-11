import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "./Footer.style";

const FooterArray: string[] = [
  "Aplikacje mobilne OLX.pl",
  "Pomoc",
  "Wyróżnione ogłoszenia",
  "Oferta dla firm",
  "Blog",
  "Regulamin",
  "Polityka prywatności",
  "Reklama",
  "Biuro prasowe",
  "Informacja o realizowanej strategii podatkowej",
  "Jak działa OLX.pl",
  "Zasady bezpieczeństwa",
  "Mapa kategorii",
  "Mapa miejscowości",
  "Popularne wyszukiwania",
  "Kariera",
  "Ustawienia plików cookie",
  "Cennik",
  "Kody rabatowe",
  "Ubezpieczenia OC/AC",
];

type Props = {
  backgroundColor?: string
}

function Footer(props:Props) {
  const [anotherSpan1, setAnotherSpan1] = useState(false);
  const [anotherSpan2, setAnotherSpan2] = useState(false);

  const addSpan = (name: string) => {
    if (name === "googlePlay") {
      setAnotherSpan1(true);
    } else {
      setAnotherSpan2(true);
    }
  };

  const removeSpan = (name: string) => {
    if (name === "googlePlay") {
      setAnotherSpan1(false);
    } else {
      setAnotherSpan2(false);
    }
  };

  const spanText = anotherSpan1 ? (
    <span>
      Do pobrania w <strong>Google Play</strong>
    </span>
  ) : (
    <span>
      Pobierz w <strong>AppStore</strong>
    </span>
  );

  return (
    <StyledFooter backgroundColor ={props.backgroundColor}>
      <div>
        {FooterArray.map((item, index) => (
          <Link key={index} to="#">{item}</Link>
        ))}
      </div>
      <div>
        <Link
          to="#"
          onMouseOver={addSpan.bind(null, "googlePlay")}
          onMouseOut={removeSpan.bind(null, "googlePlay")}
        >
          <img src="/images/googlePlay.png" alt="" />
        </Link>
        <Link
          to="#"
          onMouseOver={addSpan.bind(null, "appStore")}
          onMouseOut={removeSpan.bind(null, "appStore")}
        >
          <img src="/images/appStore.png" alt="" />
        </Link>
        {anotherSpan1 || anotherSpan2 ? (
          spanText
        ) : (
          <span>Darmowa aplikacja na Twój telefon</span>
        )}
      </div>
    </StyledFooter>
  );
}

export default Footer;
