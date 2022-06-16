import calculate from '../logic/calculate';

describe('Test for  calculate function', () => {
  test('Test AC button', () => {
    const obj = {
      next: null,
      total: 5,
      operation: '+',
    };

    const result = calculate(obj, 'AC');

    expect(result).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Test = button', () => {
    const obj = {
      next: 3,
      total: 5,
      operation: '+',
    };

    const result = calculate(obj, '=');

    expect(result).toStrictEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  test('Test . button', () => {
    const obj = {
      next: '3.',
      total: null,
      operation: '+',
    };

    const result = calculate(obj, '.');

    expect(result).toStrictEqual({
      total: null,
      next: '3.',
      operation: '+',
    });
  });

  test('Test +/- button', () => {
    const obj = {
      next: '4',
      total: null,
      operation: '+',
    };

    const result = calculate(obj, '+/-');

    expect(result).toStrictEqual({
      total: null,
      next: '-4',
      operation: '+',
    });
  });
});
