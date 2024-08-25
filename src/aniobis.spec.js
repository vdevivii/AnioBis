import esBisiesto from "./aniobis";


describe('Años bisiestos', () => {
    test('Un año divisible por 400 es bisiesto', () => {
      expect(esBisiesto(2000)).toBe(true);
      expect(esBisiesto(1600)).toBe(true);
      expect(esBisiesto(2400)).toBe(true);
    });
  
    test('Un año divisible por 100 pero no por 400 no es bisiesto', () => {
      expect(esBisiesto(1700)).toBe(false);
      expect(esBisiesto(1800)).toBe(false);
      expect(esBisiesto(1900)).toBe(false);
      expect(esBisiesto(2100)).toBe(false);
    });
  

});