import { NutrientEntity } from './nutrient-entity';
import { ConversionUnit } from './conversion-unit';

describe('NutrientEntity', () => {
  it('should create an instance', () => {
    const unit = new ConversionUnit('g', 'g', 1);
    const nutrientEntity = new NutrientEntity('Caffeine', 'caffeine', unit);
    expect(nutrientEntity).toBeTruthy();

    expect(nutrientEntity.getUnit()).toEqual(unit);
  });
});
