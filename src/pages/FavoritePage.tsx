import React from 'react'
import Favorite from '../components/favorite/Favorite'
import Footer from '../components/footer/Footer'
import { StyledFavoritePage } from './FavoritePage.style'

function FavoritePage() {
  return (
    <StyledFavoritePage>
      <Favorite />
      <hr />
      <Footer />
    </StyledFavoritePage>
  )
}

export default FavoritePage