import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Little Lemon website', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole('heading', {
    name: /little lemon/i,
    level: 1
  });
  expect(headingElement).toBeInTheDocument();
});