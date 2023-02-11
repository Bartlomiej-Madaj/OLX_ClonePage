import React from 'react';
import MainCategory from '../components/mainCategory/MainCategory';
import PromotedAds from '../components/advertisements/PromotedAds';
import Search from '../components/search/Search';
import { StyledMainPage } from './MainPage.style';
import Banner from '../components/banner/Banner';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Background from '../components/background/Background';

function MainPage() {
  
  window.scrollTo(0,0);

  return (
    <StyledMainPage>
      <Background />
      <Search />
      <MainCategory />
      <PromotedAds />
      <Banner/>
      <About />
      <Footer />
    </StyledMainPage>
  )
}

export default MainPage