import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock functions
const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const setup = () => {
  return render(
    <BookingForm
      availableTimes={['17:00', '18:00']}
      dispatchAvailableTimes={mockDispatch}
      submitForm={mockSubmit}
    />
  );
};

describe('Input field validation attributes', () => {
  test('Date input has required and min date attributes', () => {
    const { getByLabelText } = setup();
    const dateInput = getByLabelText('Select date');

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min', expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/));
  });

  test('Guests input has min and max attributes', () => {
    const { getByLabelText } = setup();
    const guestsInput = getByLabelText('Number of guests');

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Email input has correct type and validation', () => {
    const { getByLabelText } = setup();
    const emailInput = getByLabelText('Your email');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
  });

  test('Phone input has pattern attribute', () => {
    const { getByLabelText } = setup();
    const phoneInput = getByLabelText('Your phone number');

    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(phoneInput).toHaveAttribute('pattern', '^\\+?\\d{10,15}$');
  });

  test('Time select has required attribute', () => {
    const { getByLabelText } = setup();
    const timeSelect = getByLabelText('Select time');

    expect(timeSelect).toHaveAttribute('required');
    expect(timeSelect).toHaveValue('');
  });

  test('Submit button is disabled when form is invalid', () => {
    const { getByText } = setup();
    const submitButton = getByText('Make Your Reservation');
    expect(submitButton).toBeDisabled();
  });
});

describe('Form validation', () => {
  test('Shows error messages when required fields are empty', async () => {
    const { getByText, getByLabelText, queryByText } = setup();

    fireEvent.submit(getByText('Make Your Reservation'));
    
    // Check for error messages instead of aria-invalid
    expect(queryByText('Please select a date')).toBeInTheDocument();
    expect(queryByText('Please select a time')).toBeInTheDocument();
    expect(queryByText('Please enter your name')).toBeInTheDocument();
    expect(queryByText('Please enter your email')).toBeInTheDocument();
    expect(queryByText('Please enter your phone number')).toBeInTheDocument();
  });

  test('Shows error when date is in the past', async () => {
    const { getByLabelText, queryByText } = setup();
    const dateInput = getByLabelText('Select date');
    
    fireEvent.change(dateInput, { target: { value: '2000-01-01' } });
    fireEvent.blur(dateInput);
    
    expect(queryByText('Please select a future date')).toBeInTheDocument();
  });
});