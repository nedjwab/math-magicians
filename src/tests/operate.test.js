import operate from '../logic/operate';

describe('Test for  calculate function', () => {
  test('Test multiple function button', () => {
    // arrange
    const numOne = 2;
    const numTwo = 3;
    const operation = 'x';

    const result = operate(numOne, numTwo, operation);

    expect(Number(result)).toBe(6);
  });

  test('Test sum function button', () => {
    const numOne = 2;
    const numTwo = 3;
    const operation = '+';

    const result = operate(numOne, numTwo, operation);

    expect(Number(result)).toBe(5);
  });

  test('Test div function button', () => {
    const numOne = 8;
    const numTwo = 4;
    const operation = '÷';

    const result = operate(numOne, numTwo, operation);

    expect(Number(result)).toBe(2);
  });

  test('Test mod function button', () => {
    const numOne = 8;
    const numTwo = 4;
    const operation = '%';

    const result = operate(numOne, numTwo, operation);

    expect(Number(result)).toBe(0);
  });
  test('Test minis function button', () => {
    const numOne = 8;
    const numTwo = 4;
    const operation = '-';

    const result = operate(numOne, numTwo, operation);

    expect(Number(result)).toBe(4);
  });
});
