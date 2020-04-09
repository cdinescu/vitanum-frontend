import { ConversionUnit } from './conversion-unit';

export class NutrientEntity {
    private displayName: string;
    private internalName: string;
    private unit: ConversionUnit;

    constructor(displayName: string, internalName: string, unit: ConversionUnit) {
        this.displayName = displayName;
        this.internalName = internalName;
        this.unit = unit;
    }

    getDisplayName(): string {
        return this.displayName;
    }

    getInternalName(): string {
        return this.internalName;
    }

    getUnit(): ConversionUnit {
        return this.unit;
    }
}
