import { ConversionUnit } from './conversion-unit';
import { NutrientEntity } from './nutrient-entity';

export class NutrientHolder {
    gramConversionUnit = new ConversionUnit('g', 'mg', 1000);
    miliGramConversionUnit = new ConversionUnit('mg', 'mg', 1);
    microGramConversionUnit = new ConversionUnit('iug', 'mg', 0.001);

    kCalConversionUnit = new ConversionUnit('kCal', 'kCal', 1);

    loadNutrientEntiries(): NutrientEntity[] {
        return this.computeNutrientEntities();
    }

    private computeNutrientEntities(): NutrientEntity[] {
        const nutrientEntities = [];

        nutrientEntities.push(new NutrientEntity('Caffeine', 'caffeine', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Calcium', 'calcium', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Carbohydrate', 'carbohydrate', this.gramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Cholesterol', 'cholesterol', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Choline', 'choline', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Cryptoxanthin', 'cryptoxanthin', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Epa', 'epa', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Fluoride', 'fluoride', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Folate', 'folate', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Iron', 'iron', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Leucine', 'leucine', this.gramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Magnesium', 'magnesium', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Niacin', 'niacin', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Pantothenic Acid', 'pantothenic_acid', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Phosphorus', 'phosphorus', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Polyunsaturated Fat', 'polyunsat_fat', this.gramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Potassium', 'potassium', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Protein', 'protein', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Riboflavin', 'riboflavin', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Saturated Fat', 'saturated-fat', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Selenium', 'selenium', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Total Calories', 'total-kcal', this.kCalConversionUnit));
        nutrientEntities.push(new NutrientEntity('Total Sugar', 'total-sugar', this.gramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin B6', 'vitamin-b6', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin B12', 'vitamin-b12', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin C', 'vitamin-c', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin D2', 'vitamin-d2', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin Diu', 'vitamin-diu', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin E', 'vitamin-e', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin K', 'vitamin-k', this.microGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Vitamin C', 'vitamin-c', this.miliGramConversionUnit));
        nutrientEntities.push(new NutrientEntity('Zinc', 'zinc', this.miliGramConversionUnit));

        return nutrientEntities;
    }
}
