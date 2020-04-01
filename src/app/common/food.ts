import { FoodNutrient } from './food-nutrient';

export class Food {
    fdcId: string;

    description: string;

    measure: string;

    quantity: number;

    foodNutrients: FoodNutrient[];
}
