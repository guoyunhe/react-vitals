import { reactVitals } from '.';

describe('reactVitals', () => {
  describe('normal', async () => {
    expect(reactVitals('Foo', 'Bar')).toBe('Foo Bar');
  });

  describe('lastName upper case', async () => {
    expect(reactVitals('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
