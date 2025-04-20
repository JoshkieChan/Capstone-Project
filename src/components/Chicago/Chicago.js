import React from 'react';
import './Chicago.css';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-container">
        <div className="chicago-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
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
          <p>
            Little Lemon has become a cornerstone of the Chicago food scene, known for its warm atmosphere,
            exceptional service, and unforgettable dining experience that keeps customers coming back for more.
          </p>
        </div>
        <div className="chicago-images">
          <img
            src="/icons_assets/Mario and Adrian A.jpg"
            alt="Mario and Adrian"
            className="image-top"
          />
          <img
            src="/icons_assets/Mario and Adrian b.jpg"
            alt="Mario and Adrian cooking"
            className="image-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;