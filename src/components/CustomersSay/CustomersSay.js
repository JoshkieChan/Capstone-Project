import React from 'react';
import './CustomersSay.css';

function CustomersSay() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      image: '/icons_assets/restaurant.jpg',
      review: 'The food was absolutely amazing! The flavors were authentic and the service was impeccable. Will definitely be coming back!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 4,
      image: '/icons_assets/restaurant chef B.jpg',
      review: 'Great atmosphere and delicious Mediterranean cuisine. The Greek salad was fresh and the lemon dessert was to die for!'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      image: '/icons_assets/Mario and Adrian A.jpg',
      review: 'Little Lemon has become the favorite restaurant of the family...'
    },
    {
      id: 4,
      name: 'David Wilson',
      rating: 5,
      image: '/icons_assets/Mario and Adrian b.jpg',
      review: 'The bruchetta is the best I ever had! This place is a hidden gem in Chicago. Highly recommend for any occasion.'
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>
          <img src="/icons_assets/Recent.svg" alt="Recent" className="heading-icon" style={{marginRight: '10px', verticalAlign: 'middle', width: '24px', height: '24px'}} />
          What our customers say!
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="customer-info">
                <div className="customer-img">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <h3>{testimonial.name}</h3>
              </div>
              <p className="review-text">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;