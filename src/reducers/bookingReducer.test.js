import { initializeTimes, updateTimes } from './bookingReducer.js';

// ... other imports or setup ...

describe('bookingReducer', () => {
  describe('initializeTimes', () => {
    it('should return the correct initial available times', () => {
      const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
      const result = initializeTimes();
      expect(result).toEqual(expectedTimes);
    });
  });

  describe('updateTimes', () => {
    it('should return the same value as the state provided', () => {
      const currentState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UPDATE_TIMES', payload: ['17:00', '18:00', '19:00'] };
      const result = updateTimes(currentState, action);
      expect(result).toEqual(currentState);
    });
  });
});