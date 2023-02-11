import React from 'react'
import { StyledAbout } from './About.style'

function About() {
  return (
    <StyledAbout>
        <img src="/images/olx_logo.png" alt="" />
        <article>OLX.pl to darmowe ogłoszenia lokalne w kategoriach: Moda, Zwierzęta, Dla Dzieci, Sport i Hobby, Muzyka i Edukacja. Szybko znajdziesz tu ciekawe ogłoszenia i łatwo skontaktujesz się z ogłoszeniodawcą. Na OLX.pl czeka na Ciebie praca biurowa, mieszkania, pokoje, samochody. Jeśli chcesz coś sprzedać - w prosty sposób dodasz bezpłatne ogłoszenia. Chcesz coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku na OLX.pl</article>
        <span>Dołącz do nas:</span>
        <a href='#'><img src="/images/fb.png" alt="" /></a>
        <a href='#'><img src="/images/instagram.png" alt="" /></a>
        <a href='#'><img src="/images/twitter.png" alt="" /></a>
        <a href='#'><img src="/images/in.png" alt="" /></a>
        <a href='#'><img src="/images/youtube.png" alt="" /></a>
    </StyledAbout>
  )
}

export default About