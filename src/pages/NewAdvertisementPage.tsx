import React, { useContext } from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import NewAdvertisement from "../components/newAdvertisement/NewAdvertisement";
import { StyledNewAdertisementPage } from "./NewAdvertisementPage.style";
import Wrapper from "../components/wrapper/Wrapper";
import AdvertisementContext from "../store/advertisement-context";

function NewAdvertisementPage() {

  const statusCtx = useContext(AdvertisementContext);

  return (
    <StyledNewAdertisementPage>
      <Wrapper>
        <NewAdvertisement />
       {!statusCtx.dropStatus && <About /> } 
       {!statusCtx.dropStatus && <Footer /> } 
      </Wrapper>
    </StyledNewAdertisementPage>
  );
}

export default NewAdvertisementPage;
