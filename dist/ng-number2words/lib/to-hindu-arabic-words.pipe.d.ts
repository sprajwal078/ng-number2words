import { PipeTransform } from '@angular/core';
import { MinMax } from './types';
export declare class ToHinduArabicWordsPipe implements PipeTransform {
    subHundredRanges: MinMax[];
    ranges: MinMax[];
    transform(value: any): any;
    convertToWord(number: any, words?: any[], ignoreZero?: boolean): any;
    convertReminderToWord(value: any, number: any): any[];
}
