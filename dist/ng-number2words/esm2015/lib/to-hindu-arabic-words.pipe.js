/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { WordValues, SUB_TWENTIES_MAPPING, TENTH_MAPPING } from './hindu-arabic-word-map';
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
     * @return {?}
     */
    transform(value) {
        if (typeof (value) !== 'number') {
            if (isNaN(+value)) {
                console.error(`value not number: ${value} is not a number. Please ensure the value is a number`);
                return null;
            }
            console.warn(`'${value}' converted to number: for best results, please ensure you provide number instead of string`);
            value = +value;
        }
        /** @type {?} */
        const words = this.convertToWord(value);
        return words.join(' ');
    }
    /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    convertToWord(number, words = [], ignoreZero = false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvdG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNMUYsTUFBTSxPQUFPLHNCQUFzQjtJQUhuQztRQUtFLHFCQUFnQixHQUFhO1lBQzNCO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsR0FBRzthQUNUO1NBQ0YsQ0FBQztRQUNGLFdBQU0sR0FBYTtZQUNqQjtnQkFDRSxHQUFHLEVBQUUsVUFBVSxDQUFDLE9BQU87Z0JBQ3ZCLEdBQUcsRUFBRSxVQUFVLENBQUMsUUFBUTthQUN6QjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxVQUFVLENBQUMsUUFBUTtnQkFDeEIsR0FBRyxFQUFFLFVBQVUsQ0FBQyxJQUFJ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QztnQkFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM3RDtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTTs7Y0FDM0IsUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNO1FBQy9CLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7OztZQXJIRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLG9CQUFvQjthQUMzQjs7OztJQUdDLGtEQWlDRTs7SUFDRix3Q0F5QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmRWYWx1ZXMsIFNVQl9UV0VOVElFU19NQVBQSU5HLCBURU5USF9NQVBQSU5HIH0gZnJvbSAnLi9oaW5kdS1hcmFiaWMtd29yZC1tYXAnO1xyXG5pbXBvcnQgeyBNaW5NYXggfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndG9IaW5kdUFyYWJpY1dvcmRzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9IaW5kdUFyYWJpY1dvcmRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBzdWJIdW5kcmVkUmFuZ2VzOiBNaW5NYXhbXSA9IFtcclxuICAgIHtcclxuICAgICAgbWluOiAyMCxcclxuICAgICAgbWF4OiAzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiAzMCxcclxuICAgICAgbWF4OiA0MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiA0MCxcclxuICAgICAgbWF4OiA1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiA1MCxcclxuICAgICAgbWF4OiA2MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiA2MCxcclxuICAgICAgbWF4OiA3MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiA3MCxcclxuICAgICAgbWF4OiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiA4MCxcclxuICAgICAgbWF4OiA5MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiA5MCxcclxuICAgICAgbWF4OiAxMDBcclxuICAgIH1cclxuICBdO1xyXG4gIHJhbmdlczogTWluTWF4W10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG1pbjogV29yZFZhbHVlcy5odW5kcmVkLFxyXG4gICAgICBtYXg6IFdvcmRWYWx1ZXMudGhvdXNhbmRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogV29yZFZhbHVlcy50aG91c2FuZCxcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLmxha2hcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogV29yZFZhbHVlcy5sYWtoLFxyXG4gICAgICBtYXg6IFdvcmRWYWx1ZXMuY3JvcmVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogV29yZFZhbHVlcy5jcm9yZSxcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLmFyYWJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogV29yZFZhbHVlcy5hcmFiLFxyXG4gICAgICBtYXg6IFdvcmRWYWx1ZXMua2hhcmFiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMua2hhcmFiLFxyXG4gICAgICBtYXg6IDEwMCAqIFdvcmRWYWx1ZXMua2hhcmFiXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgKHZhbHVlKSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGB2YWx1ZSBub3QgbnVtYmVyOiAke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFBsZWFzZSBlbnN1cmUgdGhlIHZhbHVlIGlzIGEgbnVtYmVyYCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGAnJHt2YWx1ZX0nIGNvbnZlcnRlZCB0byBudW1iZXI6IGZvciBiZXN0IHJlc3VsdHMsIHBsZWFzZSBlbnN1cmUgeW91IHByb3ZpZGUgbnVtYmVyIGluc3RlYWQgb2Ygc3RyaW5nYFxyXG4gICAgICApO1xyXG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy5jb252ZXJ0VG9Xb3JkKHZhbHVlKTtcclxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VG9Xb3JkKG51bWJlciwgd29yZHMgPSBbXSwgaWdub3JlWmVybyA9IGZhbHNlKSB7XHJcbiAgICBpZiAobnVtYmVyID4gKDEwMCAqIFdvcmRWYWx1ZXMua2hhcmFiKSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGB2YWx1ZSBub3Qgc3VwcG9ydGVkOiAke251bWJlcn0gZXhjZWVkcyB0aGUgbWF4IHZhbHVlIHdoaWNoIGlzIDk5OSB0cmlsbGlvbmApO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBpZiAobnVtYmVyIDwgMCkge1xyXG4gICAgICB3b3Jkcy5wdXNoKCdtaW51cycpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Xb3JkKE1hdGguYWJzKG51bWJlciksIHdvcmRzKTtcclxuICAgIH1cclxuICAgIGlmIChudW1iZXIgPD0gMjApIHtcclxuICAgICAgaWYgKG51bWJlciA9PT0gMCAmJiBpZ25vcmVaZXJvKSB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmRzO1xyXG4gICAgICB9XHJcbiAgICAgIHdvcmRzLnB1c2goU1VCX1RXRU5USUVTX01BUFBJTkdbbnVtYmVyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBtaW5NYXggb2YgdGhpcy5zdWJIdW5kcmVkUmFuZ2VzKSB7XHJcbiAgICAgIGlmIChudW1iZXIgPj0gbWluTWF4Lm1pbiAmJiBudW1iZXIgPCBtaW5NYXgubWF4KSB7XHJcbiAgICAgICAgd29yZHMucHVzaCguLi50aGlzLmNvbnZlcnRSZW1pbmRlclRvV29yZChudW1iZXIsIG1pbk1heC5taW4pKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgbWluTWF4IG9mIHRoaXMucmFuZ2VzKSB7XHJcbiAgICAgIGlmIChudW1iZXIgPj0gbWluTWF4Lm1pbiAmJiBudW1iZXIgPCBtaW5NYXgubWF4KSB7XHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb252ZXJ0VG9Xb3JkKCtNYXRoLmZsb29yKChudW1iZXIgLyBtaW5NYXgubWluKSkudG9GaXhlZCgpKTtcclxuICAgICAgICB3b3Jkcy5wdXNoKC4uLnByZWZpeCwgVEVOVEhfTUFQUElOR1ttaW5NYXgubWluXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvV29yZChudW1iZXIgJSBtaW5NYXgubWluLCB3b3JkcywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB3b3JkcztcclxuICB9XHJcblxyXG4gIGNvbnZlcnRSZW1pbmRlclRvV29yZCh2YWx1ZSwgbnVtYmVyKSB7XHJcbiAgICBjb25zdCByZW1pbmRlciA9IHZhbHVlICUgbnVtYmVyO1xyXG4gICAgcmV0dXJuIHJlbWluZGVyID8gW1RFTlRIX01BUFBJTkdbbnVtYmVyXSwgU1VCX1RXRU5USUVTX01BUFBJTkdbcmVtaW5kZXJdXSA6IFtURU5USF9NQVBQSU5HW251bWJlcl1dO1xyXG4gIH1cclxuXHJcbn1cclxuIl19