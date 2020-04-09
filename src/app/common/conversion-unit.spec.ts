import { ConversionUnit } from './conversion-unit';

describe('ConversionUnit', () => {
  it('should create an instance', () => {
    expect(new ConversionUnit('g', 'g', 1)).toBeTruthy();
  });
});
