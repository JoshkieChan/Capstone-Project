import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import Specials from '../Specials/Specials';
import CustomersSay from '../CustomersSay/CustomersSay';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <CallToAction />
      <Specials />
      <CustomersSay />
    </div>
  );
}

export default HomePage;