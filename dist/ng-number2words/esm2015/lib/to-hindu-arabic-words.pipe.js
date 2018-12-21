/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { WordValues, SUB_TWENTIES_MAPPING, TENTH_MAPPING } from './hindu-arabic-word-map';
import { SUB_HUNDRED_NP, TENTH_MAPPING_NP } from './language-mapping/nepali';
export class ToHinduArabicWordsPipe {
    constructor() {
        this.subHundredRanges = [
            {
                min: 20,
                max: 30
            },
            {
                min: 30,
                max: 40
            },
            {
                min: 40,
                max: 50
            },
            {
                min: 50,
                max: 60
            },
            {
                min: 60,
                max: 70
            },
            {
                min: 70,
                max: 80
            },
            {
                min: 80,
                max: 90
            },
            {
                min: 90,
                max: 100
            }
        ];
        this.ranges = [
            {
                min: WordValues.hundred,
                max: WordValues.thousand
            },
            {
                min: WordValues.thousand,
                max: WordValues.lakh
            },
            {
                min: WordValues.lakh,
                max: WordValues.crore
            },
            {
                min: WordValues.crore,
                max: WordValues.arab
            },
            {
                min: WordValues.arab,
                max: WordValues.kharab
            },
            {
                min: WordValues.kharab,
                max: 100 * WordValues.kharab
            },
        ];
    }
    /**
     * @param {?} value
     * @param {?=} language
     * @return {?}
     */
    transform(value, language = 'en') {
        if (typeof (value) !== 'number') {
            if (isNaN(+value)) {
                console.error(`value not number: ${value} is not a number. Please ensure the value is a number`);
                return null;
            }
            console.warn(`'${value}' converted to number: for best results, please ensure you provide number instead of string`);
            value = +value;
        }
        /** @type {?} */
        let words = [];
        if (language === 'en') {
            words = this.convertToWord(value);
        }
        else {
            words = this.convertToLanguage(value, language);
        }
        return words.join(' ');
    }
    /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @param {?=} lang
     * @return {?}
     */
    convertToWord(number, words = [], ignoreZero = false, lang = 'en') {
        if (number > (100 * WordValues.kharab)) {
            console.error(`value not supported: ${number} exceeds the max value which is 999 trillion`);
            return [];
        }
        if (number < 0) {
            words.push('minus');
            return this.convertToWord(Math.abs(number), words);
        }
        if (number <= 20) {
            if (number === 0 && ignoreZero) {
                return words;
            }
            words.push(SUB_TWENTIES_MAPPING[number]);
        }
        for (const minMax of this.subHundredRanges) {
            if (number >= minMax.min && number < minMax.max) {
                words.push(...this.convertReminderToWord(number, minMax.min));
                break;
            }
        }
        for (const minMax of this.ranges) {
            if (number >= minMax.min && number < minMax.max) {
                /** @type {?} */
                const prefix = this.convertToWord(+Math.floor((number / minMax.min)).toFixed());
                words.push(...prefix, TENTH_MAPPING[minMax.min]);
                return this.convertToWord(number % minMax.min, words, true);
            }
        }
        return words;
    }
    /**
     * @param {?} value
     * @param {?} number
     * @return {?}
     */
    convertReminderToWord(value, number) {
        /** @type {?} */
        const reminder = value % number;
        return reminder ? [TENTH_MAPPING[number], SUB_TWENTIES_MAPPING[reminder]] : [TENTH_MAPPING[number]];
    }
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    convertToLanguage(value, lang) {
        switch (lang) {
            case 'np':
                return this.convertToNepali(value);
        }
    }
    /**
     * @param {?} value
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    convertToNepali(value, words = [], ignoreZero = false) {
        if (value > (100 * WordValues.kharab)) {
            console.error(`value not supported: ${value} exceeds the max value which is 999 trillion`);
            return [];
        }
        if (value < 0) {
            words.push('माइनस');
            return this.convertToWord(Math.abs(value), words);
        }
        if (value < 100) {
            if (value === 0 && ignoreZero) {
                return words;
            }
            words.push(SUB_HUNDRED_NP[value]);
        }
        for (const minMax of this.ranges) {
            if (value >= minMax.min && value < minMax.max) {
                /** @type {?} */
                const prefix = this.convertToNepali(+Math.floor((value / minMax.min)).toFixed());
                words.push(...prefix, TENTH_MAPPING_NP[minMax.min]);
                return this.convertToNepali(value % minMax.min, words, true);
            }
        }
        return words;
    }
}
ToHinduArabicWordsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'toHinduArabicWords'
            },] }
];
if (false) {
    /** @type {?} */
    ToHinduArabicWordsPipe.prototype.subHundredRanges;
    /** @type {?} */
    ToHinduArabicWordsPipe.prototype.ranges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvdG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzdFLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7UUFLRSxxQkFBZ0IsR0FBYTtZQUMzQjtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEdBQUc7YUFDVDtTQUNGLENBQUM7UUFDRixXQUFNLEdBQWE7WUFDakI7Z0JBQ0UsR0FBRyxFQUFFLFVBQVUsQ0FBQyxPQUFPO2dCQUN2QixHQUFHLEVBQUUsVUFBVSxDQUFDLFFBQVE7YUFDekI7WUFDRDtnQkFDRSxH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UGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3JkVmFsdWVzLCBTVUJfVFdFTlRJRVNfTUFQUElORywgVEVOVEhfTUFQUElORyB9IGZyb20gJy4vaGluZHUtYXJhYmljLXdvcmQtbWFwJztcclxuaW1wb3J0IHsgTWluTWF4IH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IFNVQl9IVU5EUkVEX05QLCBURU5USF9NQVBQSU5HX05QIH0gZnJvbSAnLi9sYW5ndWFnZS1tYXBwaW5nL25lcGFsaSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RvSGluZHVBcmFiaWNXb3JkcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvSGluZHVBcmFiaWNXb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgc3ViSHVuZHJlZFJhbmdlczogTWluTWF4W10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG1pbjogMjAsXHJcbiAgICAgIG1heDogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogMzAsXHJcbiAgICAgIG1heDogNDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNDAsXHJcbiAgICAgIG1heDogNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNTAsXHJcbiAgICAgIG1heDogNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNjAsXHJcbiAgICAgIG1heDogNzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNzAsXHJcbiAgICAgIG1heDogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogODAsXHJcbiAgICAgIG1heDogOTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogOTAsXHJcbiAgICAgIG1heDogMTAwXHJcbiAgICB9XHJcbiAgXTtcclxuICByYW5nZXM6IE1pbk1heFtdID0gW1xyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMuaHVuZHJlZCxcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLnRob3VzYW5kXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMudGhvdXNhbmQsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy5sYWtoXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMubGFraCxcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLmNyb3JlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMuY3JvcmUsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy5hcmFiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMuYXJhYixcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLmtoYXJhYlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLmtoYXJhYixcclxuICAgICAgbWF4OiAxMDAgKiBXb3JkVmFsdWVzLmtoYXJhYlxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgbGFuZ3VhZ2UgPSAnZW4nKTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgKHZhbHVlKSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGB2YWx1ZSBub3QgbnVtYmVyOiAke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFBsZWFzZSBlbnN1cmUgdGhlIHZhbHVlIGlzIGEgbnVtYmVyYCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGAnJHt2YWx1ZX0nIGNvbnZlcnRlZCB0byBudW1iZXI6IGZvciBiZXN0IHJlc3VsdHMsIHBsZWFzZSBlbnN1cmUgeW91IHByb3ZpZGUgbnVtYmVyIGluc3RlYWQgb2Ygc3RyaW5nYFxyXG4gICAgICApO1xyXG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgIH1cclxuICAgIGxldCB3b3Jkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gJ2VuJykge1xyXG4gICAgICB3b3JkcyA9IHRoaXMuY29udmVydFRvV29yZCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3b3JkcyA9IHRoaXMuY29udmVydFRvTGFuZ3VhZ2UodmFsdWUsIGxhbmd1YWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VG9Xb3JkKG51bWJlcjogbnVtYmVyLCB3b3JkcyA9IFtdLCBpZ25vcmVaZXJvID0gZmFsc2UsIGxhbmcgPSAnZW4nKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKG51bWJlciA+ICgxMDAgKiBXb3JkVmFsdWVzLmtoYXJhYikpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgdmFsdWUgbm90IHN1cHBvcnRlZDogJHtudW1iZXJ9IGV4Y2VlZHMgdGhlIG1heCB2YWx1ZSB3aGljaCBpcyA5OTkgdHJpbGxpb25gKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlciA8IDApIHtcclxuICAgICAgd29yZHMucHVzaCgnbWludXMnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvV29yZChNYXRoLmFicyhudW1iZXIpLCB3b3Jkcyk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtYmVyIDw9IDIwKSB7XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDAgJiYgaWdub3JlWmVybykge1xyXG4gICAgICAgIHJldHVybiB3b3JkcztcclxuICAgICAgfVxyXG4gICAgICB3b3Jkcy5wdXNoKFNVQl9UV0VOVElFU19NQVBQSU5HW251bWJlcl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgbWluTWF4IG9mIHRoaXMuc3ViSHVuZHJlZFJhbmdlcykge1xyXG4gICAgICBpZiAobnVtYmVyID49IG1pbk1heC5taW4gJiYgbnVtYmVyIDwgbWluTWF4Lm1heCkge1xyXG4gICAgICAgIHdvcmRzLnB1c2goLi4udGhpcy5jb252ZXJ0UmVtaW5kZXJUb1dvcmQobnVtYmVyLCBtaW5NYXgubWluKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG1pbk1heCBvZiB0aGlzLnJhbmdlcykge1xyXG4gICAgICBpZiAobnVtYmVyID49IG1pbk1heC5taW4gJiYgbnVtYmVyIDwgbWluTWF4Lm1heCkge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29udmVydFRvV29yZCgrTWF0aC5mbG9vcigobnVtYmVyIC8gbWluTWF4Lm1pbikpLnRvRml4ZWQoKSk7XHJcbiAgICAgICAgd29yZHMucHVzaCguLi5wcmVmaXgsIFRFTlRIX01BUFBJTkdbbWluTWF4Lm1pbl0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1dvcmQobnVtYmVyICUgbWluTWF4Lm1pbiwgd29yZHMsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd29yZHM7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0UmVtaW5kZXJUb1dvcmQodmFsdWU6IG51bWJlciwgbnVtYmVyOiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCByZW1pbmRlciA9IHZhbHVlICUgbnVtYmVyO1xyXG4gICAgcmV0dXJuIHJlbWluZGVyID8gW1RFTlRIX01BUFBJTkdbbnVtYmVyXSwgU1VCX1RXRU5USUVTX01BUFBJTkdbcmVtaW5kZXJdXSA6IFtURU5USF9NQVBQSU5HW251bWJlcl1dO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRvTGFuZ3VhZ2UodmFsdWU6IG51bWJlciwgbGFuZzogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgc3dpdGNoIChsYW5nKSB7XHJcbiAgICAgIGNhc2UgJ25wJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9OZXBhbGkodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udmVydFRvTmVwYWxpKHZhbHVlOiBudW1iZXIsIHdvcmRzID0gW10sIGlnbm9yZVplcm8gPSBmYWxzZSk6IHN0cmluZ1tdIHtcclxuICAgIGlmICh2YWx1ZSA+ICgxMDAgKiBXb3JkVmFsdWVzLmtoYXJhYikpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgdmFsdWUgbm90IHN1cHBvcnRlZDogJHt2YWx1ZX0gZXhjZWVkcyB0aGUgbWF4IHZhbHVlIHdoaWNoIGlzIDk5OSB0cmlsbGlvbmApO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHdvcmRzLnB1c2goJ+CkruCkvuCkh+CkqOCkuCcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Xb3JkKE1hdGguYWJzKHZhbHVlKSwgd29yZHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlIDwgMTAwKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gMCAmJiBpZ25vcmVaZXJvKSB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmRzO1xyXG4gICAgICB9XHJcbiAgICAgIHdvcmRzLnB1c2goU1VCX0hVTkRSRURfTlBbdmFsdWVdKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgbWluTWF4IG9mIHRoaXMucmFuZ2VzKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA+PSBtaW5NYXgubWluICYmIHZhbHVlIDwgbWluTWF4Lm1heCkge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29udmVydFRvTmVwYWxpKCtNYXRoLmZsb29yKCh2YWx1ZSAvIG1pbk1heC5taW4pKS50b0ZpeGVkKCkpO1xyXG4gICAgICAgIHdvcmRzLnB1c2goLi4ucHJlZml4LCBURU5USF9NQVBQSU5HX05QW21pbk1heC5taW5dKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9OZXBhbGkodmFsdWUgJSBtaW5NYXgubWluLCB3b3JkcywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB3b3JkcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==