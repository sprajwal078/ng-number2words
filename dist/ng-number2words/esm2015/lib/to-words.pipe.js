/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { WordValues, SUB_TWENTIES_MAPPING, TENTH_MAPPING } from './word-map';
export class ToWordsPipe {
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
                max: WordValues.million
            },
            {
                min: WordValues.million,
                max: WordValues.billion
            },
            {
                min: WordValues.billion,
                max: WordValues.trillion
            },
            {
                min: WordValues.trillion,
                max: 999 * WordValues.trillion
            },
        ];
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
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
        if (number > (999 * WordValues.trillion)) {
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
ToWordsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'toWords'
            },] }
];
if (false) {
    /** @type {?} */
    ToWordsPipe.prototype.subHundredRanges;
    /** @type {?} */
    ToWordsPipe.prototype.ranges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8td29yZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW51bWJlcjJ3b3Jkcy8iLCJzb3VyY2VzIjpbImxpYi90by13b3Jkcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUs3RSxNQUFNLE9BQU8sV0FBVztJQUh4QjtRQUlFLHFCQUFnQixHQUFtQztZQUNqRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEdBQUc7YUFDVDtTQUNGLENBQUM7UUFDRixXQUFNLEdBQW1DO1lBQ3ZDO2dCQUNFLEdBQUcsRUFBRSxVQUFVLENBQUMsT0FBTztnQkFDdkIsR0FBRyxFQUFFLFVBQVUsQ0FBQyxRQUFRO2FBQ3pCO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLFVBQVUsQ0FBQyxRQUFRO2dCQUN4QixHQUFHLEVBQUUsVUFBVSxDQUFDLE9BQU87YUFDeEI7WUFDRDtnQkFDRSxHQUFHLEVBQUUs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QzdEO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELHFCQUFxQixDQUFDLEtBQUssRUFBRSxNQUFNOztjQUMzQixRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU07UUFDL0IsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7O1lBaEhGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsU0FBUzthQUNoQjs7OztJQUVDLHVDQWlDRTs7SUFDRiw2QkFxQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXb3JkVmFsdWVzLCBTVUJfVFdFTlRJRVNfTUFQUElORywgVEVOVEhfTUFQUElORyB9IGZyb20gJy4vd29yZC1tYXAnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0b1dvcmRzJ1xufSlcbmV4cG9ydCBjbGFzcyBUb1dvcmRzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBzdWJIdW5kcmVkUmFuZ2VzOiB7IG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciB9W10gPSBbXG4gICAge1xuICAgICAgbWluOiAyMCxcbiAgICAgIG1heDogMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbjogMzAsXG4gICAgICBtYXg6IDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW46IDQwLFxuICAgICAgbWF4OiA1MFxuICAgIH0sXG4gICAge1xuICAgICAgbWluOiA1MCxcbiAgICAgIG1heDogNjBcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbjogNjAsXG4gICAgICBtYXg6IDcwXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW46IDcwLFxuICAgICAgbWF4OiA4MFxuICAgIH0sXG4gICAge1xuICAgICAgbWluOiA4MCxcbiAgICAgIG1heDogOTBcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbjogOTAsXG4gICAgICBtYXg6IDEwMFxuICAgIH1cbiAgXTtcbiAgcmFuZ2VzOiB7IG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciB9W10gPSBbXG4gICAge1xuICAgICAgbWluOiBXb3JkVmFsdWVzLmh1bmRyZWQsXG4gICAgICBtYXg6IFdvcmRWYWx1ZXMudGhvdXNhbmRcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbjogV29yZFZhbHVlcy50aG91c2FuZCxcbiAgICAgIG1heDogV29yZFZhbHVlcy5taWxsaW9uXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW46IFdvcmRWYWx1ZXMubWlsbGlvbixcbiAgICAgIG1heDogV29yZFZhbHVlcy5iaWxsaW9uXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW46IFdvcmRWYWx1ZXMuYmlsbGlvbixcbiAgICAgIG1heDogV29yZFZhbHVlcy50cmlsbGlvblxuICAgIH0sXG4gICAge1xuICAgICAgbWluOiBXb3JkVmFsdWVzLnRyaWxsaW9uLFxuICAgICAgbWF4OiA5OTkgKiBXb3JkVmFsdWVzLnRyaWxsaW9uXG4gICAgfSxcbiAgXTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgdmFsdWUgbm90IG51bWJlcjogJHt2YWx1ZX0gaXMgbm90IGEgbnVtYmVyLiBQbGVhc2UgZW5zdXJlIHRoZSB2YWx1ZSBpcyBhIG51bWJlcmApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCcke3ZhbHVlfScgY29udmVydGVkIHRvIG51bWJlcjogZm9yIGJlc3QgcmVzdWx0cywgcGxlYXNlIGVuc3VyZSB5b3UgcHJvdmlkZSBudW1iZXIgaW5zdGVhZCBvZiBzdHJpbmdgXG4gICAgICApO1xuICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy5jb252ZXJ0VG9Xb3JkKHZhbHVlKTtcbiAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xuICB9XG5cbiAgY29udmVydFRvV29yZChudW1iZXIsIHdvcmRzID0gW10sIGlnbm9yZVplcm8gPSBmYWxzZSkge1xuICAgIGlmIChudW1iZXIgPiAoOTk5ICogV29yZFZhbHVlcy50cmlsbGlvbikpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHZhbHVlIG5vdCBzdXBwb3J0ZWQ6ICR7bnVtYmVyfSBleGNlZWRzIHRoZSBtYXggdmFsdWUgd2hpY2ggaXMgOTk5IHRyaWxsaW9uYCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICB3b3Jkcy5wdXNoKCdtaW51cycpO1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvV29yZChNYXRoLmFicyhudW1iZXIpLCB3b3Jkcyk7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPD0gMjApIHtcbiAgICAgIGlmIChudW1iZXIgPT09IDAgJiYgaWdub3JlWmVybykge1xuICAgICAgICByZXR1cm4gd29yZHM7XG4gICAgICB9XG4gICAgICB3b3Jkcy5wdXNoKFNVQl9UV0VOVElFU19NQVBQSU5HW251bWJlcl0pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbWluTWF4IG9mIHRoaXMuc3ViSHVuZHJlZFJhbmdlcykge1xuICAgICAgaWYgKG51bWJlciA+PSBtaW5NYXgubWluICYmIG51bWJlciA8IG1pbk1heC5tYXgpIHtcbiAgICAgICAgd29yZHMucHVzaCguLi50aGlzLmNvbnZlcnRSZW1pbmRlclRvV29yZChudW1iZXIsIG1pbk1heC5taW4pKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBtaW5NYXggb2YgdGhpcy5yYW5nZXMpIHtcbiAgICAgIGlmIChudW1iZXIgPj0gbWluTWF4Lm1pbiAmJiBudW1iZXIgPCBtaW5NYXgubWF4KSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29udmVydFRvV29yZCgrTWF0aC5mbG9vcigobnVtYmVyIC8gbWluTWF4Lm1pbikpLnRvRml4ZWQoKSk7XG4gICAgICAgIHdvcmRzLnB1c2goLi4ucHJlZml4LCBURU5USF9NQVBQSU5HW21pbk1heC5taW5dKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvV29yZChudW1iZXIgJSBtaW5NYXgubWluLCB3b3JkcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3b3JkcztcbiAgfVxuXG4gIGNvbnZlcnRSZW1pbmRlclRvV29yZCh2YWx1ZSwgbnVtYmVyKSB7XG4gICAgY29uc3QgcmVtaW5kZXIgPSB2YWx1ZSAlIG51bWJlcjtcbiAgICByZXR1cm4gcmVtaW5kZXIgPyBbVEVOVEhfTUFQUElOR1tudW1iZXJdLCBTVUJfVFdFTlRJRVNfTUFQUElOR1tyZW1pbmRlcl1dIDogW1RFTlRIX01BUFBJTkdbbnVtYmVyXV07XG4gIH1cblxufVxuIl19