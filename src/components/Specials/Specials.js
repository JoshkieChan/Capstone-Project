import React from 'react';
import './Specials.css';
import Swal from 'sweetalert2';

function Specials() {
  const handleOrder = (id) => {
   console.log(id, "id is clicked");
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, order it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Ordered!",
      text: "Your order has been processing.",
      icon: "success"
    });
  }
});
  }
  // Sample data for specials
  const specialsData = [
    {
      id: 1,
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: '/icons_assets/greek salad.jpg',
    },
    {
      id: 2,
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
      image: '/icons_assets/bruchetta.svg',
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'My grandma made this from her recipe book...',
      image: '/icons_assets/lemon dessert.jpg',
    },
  ];

  return (
    <section className="specials-section">
      <div className="specials-container">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button className="menu-button">
            <img src="/icons_assets/creditcard.svg" alt="Credit Card" className="button-icon" />
            Online Menu
          </button>
        </div>

        <div className="specials-cards">
          {specialsData.map((special) => (
            <div className="special-card" key={special.id}>
              <div className="special-img">
                <img src={special.image} alt={special.title} />
              </div>
              <div className="special-content">
                <div className="special-title">
                  <h3>{special.title}</h3>
                  <p className="special-price">{special.price}</p>
                </div>
                <p className="special-description">{special.description}</p>
                <button className="order-button" onClick={handleOrder}>
                  Order Now
                  <img src="/icons_assets/Basket.svg" alt="Delivery" className="delivery-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;