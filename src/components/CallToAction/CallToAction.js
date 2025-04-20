import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-content flex-layout">
        <div className="hero-image left">
          <img src="/icons_assets/restauranfood.jpg" alt="Little Lemon Restaurant Food" />
        </div>
        <div className="hero-text center">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <div className="cta-buttons">
            <Link to="/booking" className="cta-button primary">Reserve a Table</Link>
            <Link to="/chicago" className="cta-button secondary">Our Chicago Story</Link>
          </div>
        </div>
        <div className="hero-image right">
          <img src="/icons_assets/restauranfood.jpg" alt="Little Lemon Restaurant Food" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;