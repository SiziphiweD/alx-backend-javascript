// Import the functions to be tested
import { taskFirst, taskNext } from '../0-constants.js';

// Test for the taskFirst function
describe('taskFirst function', () => {
  test('should return a string', () => {
    const result = taskFirst();
    expect(typeof result).toBe('string');
  });

  test('should return the expected string "I prefer const when I can."', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
  });
});

// Test for the taskNext function
describe('taskNext function', () => {
  test('should return a string', () => {
    const result = taskNext();
    expect(typeof result).toBe('string');
  });

  test('should return the expected string "But sometimes let is okay"', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
  });
});

