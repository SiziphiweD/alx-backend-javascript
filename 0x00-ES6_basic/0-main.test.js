// Import the functions to be tested
import { taskFirst, taskNext } from '../0-constants.js';

// Test for taskFirst and taskNext functions together
describe('taskFirst and taskNext functions', () => {
  test('should return a string for taskFirst', () => {
    const result = taskFirst();
    expect(typeof result).toBe('string');
  });

  test('should return the expected string for taskFirst', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
  });

  test('should return a string for taskNext', () => {
    const result = taskNext();
    expect(typeof result).toBe('string');
  });

  test('should return the expected string for taskNext', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
  });

  test('should combine taskFirst and taskNext correctly', () => {
    const combinedResult = taskFirst() + ' ' + taskNext();
    const expectedCombinedResult = 'I prefer const when I can. But sometimes let is okay';
    expect(combinedResult).toBe(expectedCombinedResult);
  });
});

