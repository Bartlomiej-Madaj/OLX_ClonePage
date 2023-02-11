import React from "react";
import About from "../components/about/About";
import AddDesctription from "../components/addDescription/AddDesctription";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import Wrapper from "../components/wrapper/Wrapper";
import { StyledAdvertisementPage } from "./AdvertisementPage.style";

function AdvertisementPage() {
  window.scrollTo(0, 0);
  

  return (
    <StyledAdvertisementPage>
      <Wrapper>
        <AddDesctription />
        <About />
        <Footer backgroundColor="white" />
      </Wrapper>
    </StyledAdvertisementPage>
  );
}

export default AdvertisementPage;
