import esBisiesto from "./aniobis";


describe('Años bisiestos', () => {
  test('Un año divisible por 400 es bisiesto', () => {
    expect(esBisiesto(2000)).toBe(true);
    expect(esBisiesto(1600)).toBe(true);
    expect(esBisiesto(2400)).toBe(true);
  });

});