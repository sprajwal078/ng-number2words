import { PipeTransform } from '@angular/core';
import { MinMax } from './types';
export declare class ToHinduArabicWordsPipe implements PipeTransform {
    subHundredRanges: MinMax[];
    ranges: MinMax[];
    transform(value: number | string, language?: string): any;
    convertToWord(number: number, words?: any[], ignoreZero?: boolean, lang?: string): string[];
    convertReminderToWord(value: number, number: number): string[];
    convertToLanguage(value: number, lang: string): string[];
    convertToNepali(value: number, words?: any[], ignoreZero?: boolean): string[];
}
