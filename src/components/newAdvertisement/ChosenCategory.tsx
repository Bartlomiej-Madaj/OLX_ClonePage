import React, { useContext } from "react";
import AdvertisementContext from "../../store/advertisement-context";
import MainCategory from "../mainCategory/MainCategory";
import { StyledBackdrop } from "../UI/Backdrop";
import { StyledChosenCategory } from "./ChosenCategory.style";

function ChosenCategory() {
  const statusCtx = useContext(AdvertisementContext);

  return (
    <>
      <StyledBackdrop onClick={() => statusCtx.changeDropStatus(false)} />
      <StyledChosenCategory>
        <MainCategory />
      </StyledChosenCategory>
    </>
  );
}

export default ChosenCategory;
