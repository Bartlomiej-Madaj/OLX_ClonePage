import React from 'react'
import { Outlet } from 'react-router-dom'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function MainOutcome() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainOutcome