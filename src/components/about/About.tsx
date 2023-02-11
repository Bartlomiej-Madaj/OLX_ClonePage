import React from 'react'
import { StyledAbout } from './About.style'

function About() {
  return (
    <StyledAbout>
        <img src="/images/olx_logo.png" alt="Logo Olx" />
        <article>OLX.pl to darmowe ogłoszenia lokalne w kategoriach: Moda, Zwierzęta, Dla Dzieci, Sport i Hobby, Muzyka i Edukacja. Szybko znajdziesz tu ciekawe ogłoszenia i łatwo skontaktujesz się z ogłoszeniodawcą. Na OLX.pl czeka na Ciebie praca biurowa, mieszkania, pokoje, samochody. Jeśli chcesz coś sprzedać - w prosty sposób dodasz bezpłatne ogłoszenia. Chcesz coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku na OLX.pl</article>
        <span>Dołącz do nas:</span>
        <a href='#'><img src="/images/fb.png" alt="Logo facebook" /></a>
        <a href='#'><img src="/images/instagram.png" alt="Logo instagram" /></a>
        <a href='#'><img src="/images/twitter.png" alt="Logo twitter" /></a>
        <a href='#'><img src="/images/in.png" alt="Logo Linkedin" /></a>
        <a href='#'><img src="/images/youtube.png" alt="Logo Youtube" /></a>
    </StyledAbout>
  )
}

export default About