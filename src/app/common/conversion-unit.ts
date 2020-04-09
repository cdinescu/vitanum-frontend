export class ConversionUnit {
    from: string;
    to: string;
    conversionFactor: number;

    constructor(from: string, to: string, conversionFactor: number) {
        this.from = from;
        this.to = to;
        this.conversionFactor = conversionFactor;
    }
}
