export declare class ConverterUtil {
    private words;
    value: number | string;
    maxValue: number;
    tenthMapping: any;
    subHundredMapping: any;
    decimalNotation: string;
    negativeNotation: string;
    constructor(value: number | string, tenthMapping?: any, subHundredMapping?: any, max?: number, decimalNotation?: string, negativeNotation?: string);
    convertToWords(value: number | null): string[];
    convertSubHundredToWords(value: number): string[];
    convertDecimalToWords(decimal: string): string[];
    getWords(): string;
}
