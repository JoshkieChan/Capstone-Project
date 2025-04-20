import React from 'react';

function Button({ children }) {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <button
      onClick={handleClick}
      className="primary-btn"
      aria-label="On Click"
    >
      {children}
    </button>
  );
}

export default Button;