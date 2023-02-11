import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { categoryArray } from "../../data/data";
import AdvertisementContext from "../../store/advertisement-context";
import { StyledMainCategory, StyledWrapCategory } from "./MainCategory.style";

function MainCategory() {
  const categoryCtx = useContext(AdvertisementContext);
  const statusCtx = useContext(AdvertisementContext);
  

  return (
    <StyledWrapCategory>
      <h1>Kategorie główne</h1>
      <StyledMainCategory>
        {categoryArray.map((item) => (
          <Link to="#" key={item.id}>
            <span onClick={() => {categoryCtx.changeCategoryName(item.title); statusCtx.changeDropStatus(false)}}>
              {item.title}
            </span>
            <img
              onClick={() => {categoryCtx.changeCategoryName(item.title); statusCtx.changeDropStatus(false)}}
              src={item.image}
              alt={item.title}
            />
          </Link>
        ))}
      </StyledMainCategory>
    </StyledWrapCategory>
  );
}

export default MainCategory;
