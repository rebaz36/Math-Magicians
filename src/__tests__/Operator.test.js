import operate from '../logic/operate';

describe('Operate Function Direct Calls', () => {
  test('Addition', () => {
    expect(operate(2538, 3, '+')).toBe('2541');
  });

  test('Multiplication', () => {
    expect(operate(27, 6, 'x')).toBe('162');
  });

  test('Subtraction', () => {
    expect(operate(2237, 23, '-')).toBe('2214');
  });

  test('Division', () => {
    expect(operate(2580, 5, '÷')).toBe('516');
  });

  test('Modulus', () => {
    expect(operate(2350, 30, '%')).toBe('10');
  });
});
