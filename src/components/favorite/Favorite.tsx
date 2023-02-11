import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledFavorite } from "./Favorite.style";

interface Favorite {
  id: string;
  title: string;
  image: string;
  note: string;
  description: string;
}

const navFavorite: Favorite[] = [
  {
    id: crypto.randomUUID(),
    title: "Obserwowane ogłoszenia",
    image: "images/favorite/Adds.PNG",
    note: "Brak obserwowanych ogłoszeń",
    description: `Rozpocząć obserwowanie ogłoszenia możesz na liście lub na stronie ogłoszenia: Dzięki obserwowanym wszystkie ważne ogłoszenia będziesz miał zawsze pod ręką - także w Twoim telefonie.`,
  },
  {
    id: crypto.randomUUID(),
    title: "Obserwowane wyszukiwania",
    image: "images/favorite/Searched.PNG",
    note: "Nie masz zapisanych wyników wyszukiwania",
    description: `Możesz oznaczyć obserwowane wyszukiwanie na liście ogłoszeń: Obserwowane wyszukiwania zapamiętują Twoją frazę wyszukiwania oraz/lub ustawienia filtrów.`,
  },
  {
    id: crypto.randomUUID(),
    title: "Ostatnio przeglądane",
    image: "",
    note: "",
    description: "",
  },
];

function Favorite() {
  const [active, setActive] = useState<number>(2);
  const [index, setIndex] = useState<number>(1);

  const activeButton = (id: number) => {
    setActive(id + 1);
    setIndex(id);
  };
  return (
    <StyledFavorite active={active}>
      {navFavorite
        .filter((_, id) => id === index)
        .map((item, index) => (
          <h1 key={index}>
            {item.description && "Twoje"}{" "}
            {item.description ? item.title.toLowerCase() : item.title}
          </h1>
        ))}
      <div>
        <nav>
          {navFavorite.map((item, index) => (
            <Link to="#" key={item.id} onClick={activeButton.bind(null, index)}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      {navFavorite
        .filter((_, id) => id === index)
        .map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" />
            <h3>{item.note}</h3>
            <span>{item.description}</span>
          </div>
        ))}
    </StyledFavorite>
  );
}

export default Favorite;
