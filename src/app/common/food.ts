import { Nutrient } from './nutrient';

export class Food {
    description: string;
    measure: string;
    quantity: number;
    ndbno: string;
    nutrients: Nutrient[];
}
