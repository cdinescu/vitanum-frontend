import { Measure } from './measure';

export class Nutrient {
    nutrient_id: number;
    name: string;
    derivation: string;
    group: string;
    unit: string;
    value: number;
    measures: Measure[];
}
