import React from 'react';
import './ChicagoPage.css';

function ChicagoPage() {
  return (
    <div className="chicago-page">
      <div className="chicago-hero">
        <h1>Our Chicago Story</h1>
        <p>Discover the heart and history of Little Lemon in the Windy City</p>
      </div>

      <div className="chicago-page-content">
        <div className="chicago-story">
          <div className="chicago-text-content">
            <h2>Our Beginnings</h2>
            <p>
              Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
              Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
              and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
            </p>
            <p>
              The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
              They maintain the same fresh ingredients and traditional recipes that were passed down from their family,
              while also incorporating modern cooking techniques and innovative flavor combinations.
            </p>
            <h2>Our Philosophy</h2>
            <p>
              At Little Lemon, we believe that food is more than just sustenance—it's an experience that brings people together.
              Our philosophy is simple: use the freshest ingredients, prepare them with care, and serve them with love.
            </p>
            <p>
              Little Lemon has become a cornerstone of the Chicago food scene, known for its warm atmosphere,
              exceptional service, and unforgettable dining experience that keeps customers coming back for more.
            </p>
          </div>

          <div className="chicago-image-gallery">
            <div className="gallery-image">
              <img src="/icons_assets/Mario and Adrian A.jpg" alt="Mario and Adrian" />
              <p>Founders Mario and Adrian in our Chicago kitchen</p>
            </div>
            <div className="gallery-image">
              <img src="/icons_assets/Mario and Adrian b.jpg" alt="Mario and Adrian cooking" />
              <p>Our chefs preparing signature Mediterranean dishes</p>
            </div>
            <div className="gallery-image">
              <img src="/icons_assets/restaurant.jpg" alt="Little Lemon Restaurant" />
              <p>Our welcoming Chicago restaurant</p>
            </div>
          </div>
        </div>

        <div className="chicago-visit">
          <h2>Visit Us in Chicago</h2>
          <div className="visit-info">
            <div className="address">
              <h3>Address</h3>
              <p>123 Main Street</p>
              <p>Chicago, IL 60601</p>
            </div>
            <div className="hours">
              <h3>Hours</h3>
              <p><span>Monday - Thursday:</span> 11:00 AM - 9:00 PM</p>
              <p><span>Friday - Saturday:</span> 11:00 AM - 10:00 PM</p>
              <p><span>Sunday:</span> 12:00 PM - 8:00 PM</p>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@littlelemon.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChicagoPage;