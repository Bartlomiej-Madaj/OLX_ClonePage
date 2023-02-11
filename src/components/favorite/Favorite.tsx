import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navFavorite } from "../../data/data";
import { StyledFavorite } from "./Favorite.style";

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
