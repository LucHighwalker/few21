const {isFizzy, isBuzzy, fizzyBuzzy, fizzBuzz} = require('./fizzBuzz.js');

test('tests isFizzy function', () => {
  expect(isFizzy(3)).toBe(true);
  expect(isFizzy(4)).toBe(false);
  expect(isFizzy(5)).toBe(false);
});

test('tests isBuzzy function', () => {
  expect(isBuzzy(3)).toBe(false);
  expect(isBuzzy(4)).toBe(false);
  expect(isBuzzy(5)).toBe(true);
});

test('tests fizzBuzzy function', () => {
  expect(fizzyBuzzy(4)).toBe('');
  expect(fizzyBuzzy(3)).toBe('fizz');
  expect(fizzyBuzzy(5)).toBe('buzz');
  expect(fizzyBuzzy(15)).toBe('fizzbuzz');
});

test('tests fizzBuzz function', () => {
  expect(fizzBuzz(50)).toStrictEqual({
    count: 50,
    fizz: 13,
    buzz: 7,
    fizzBuzz: 3
  });
});

