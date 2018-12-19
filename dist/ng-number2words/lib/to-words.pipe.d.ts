import { PipeTransform } from '@angular/core';
export declare class ToWordsPipe implements PipeTransform {
    subHundredRanges: {
        min: number;
        max: number;
    }[];
    ranges: {
        min: number;
        max: number;
    }[];
    transform(value: any, args?: any): any;
    convertToWord(number: any, words?: any[], ignoreZero?: boolean): any;
    convertReminderToWord(value: any, number: any): any[];
}
