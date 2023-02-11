import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

function AdvertisementOutcome() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default AdvertisementOutcome