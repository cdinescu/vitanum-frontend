import { NutrientEntity } from './nutrient-entity';
import { ConversionUnit } from './conversion-unit';

describe('NutrientEntity', () => {
  it('should create an instance', () => {
    const unit = new ConversionUnit('g', 'g', 1);
    expect(new NutrientEntity('Caffeine', 'caffeine', unit)).toBeTruthy();
  });
});
