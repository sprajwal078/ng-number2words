/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { WordValues, SUB_TWENTIES_MAPPING, TENTH_MAPPING } from './hindu-arabic-word-map';
var ToHinduArabicWordsPipe = /** @class */ (function () {
    function ToHinduArabicWordsPipe() {
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
    ToHinduArabicWordsPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof (value) !== 'number') {
            if (isNaN(+value)) {
                console.error("value not number: " + value + " is not a number. Please ensure the value is a number");
                return null;
            }
            console.warn("'" + value + "' converted to number: for best results, please ensure you provide number instead of string");
            value = +value;
        }
        /** @type {?} */
        var words = this.convertToWord(value);
        return words.join(' ');
    };
    /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    ToHinduArabicWordsPipe.prototype.convertToWord = /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    function (number, words, ignoreZero) {
        if (words === void 0) { words = []; }
        if (ignoreZero === void 0) { ignoreZero = false; }
        var e_1, _a, e_2, _b;
        if (number > (100 * WordValues.kharab)) {
            console.error("value not supported: " + number + " exceeds the max value which is 999 trillion");
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
        try {
            for (var _c = tslib_1.__values(this.subHundredRanges), _d = _c.next(); !_d.done; _d = _c.next()) {
                var minMax = _d.value;
                if (number >= minMax.min && number < minMax.max) {
                    words.push.apply(words, tslib_1.__spread(this.convertReminderToWord(number, minMax.min)));
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = tslib_1.__values(this.ranges), _f = _e.next(); !_f.done; _f = _e.next()) {
                var minMax = _f.value;
                if (number >= minMax.min && number < minMax.max) {
                    /** @type {?} */
                    var prefix = this.convertToWord(+Math.floor((number / minMax.min)).toFixed());
                    words.push.apply(words, tslib_1.__spread(prefix, [TENTH_MAPPING[minMax.min]]));
                    return this.convertToWord(number % minMax.min, words, true);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return words;
    };
    /**
     * @param {?} value
     * @param {?} number
     * @return {?}
     */
    ToHinduArabicWordsPipe.prototype.convertReminderToWord = /**
     * @param {?} value
     * @param {?} number
     * @return {?}
     */
    function (value, number) {
        /** @type {?} */
        var reminder = value % number;
        return reminder ? [TENTH_MAPPING[number], SUB_TWENTIES_MAPPING[reminder]] : [TENTH_MAPPING[number]];
    };
    ToHinduArabicWordsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'toHinduArabicWords'
                },] }
    ];
    return ToHinduArabicWordsPipe;
}());
export { ToHinduArabicWordsPipe };
if (false) {
    /** @type {?} */
    ToHinduArabicWordsPipe.prototype.subHundredRanges;
    /** @type {?} */
    ToHinduArabicWordsPipe.prototype.ranges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvdG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzFGO0lBQUE7UUFLRSxxQkFBZ0IsR0FBYTtZQUMzQjtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEdBQUc7YUFDVDtTQUNGLENBQUM7UUFDRixXQUFNLEdBQWE7WUFDakI7Z0JBQ0UsR0FBRyxFQUFFLFVBQVUsQ0FBQyxPQUFPO2dCQUN2QixHQUFHLEVBQUUsVUFBVSxDQUFDLFFBQVE7YUFDekI7WUFDRDtnQkFDRSxHQUFHLEVBQUUsVUFBVSxDQUFDLFFBQVE7Z0JBQ3hCLEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSTthQUNyQjtZQUNEO2dCQUNF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QUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMvRSxLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssbUJBQVMsTUFBTSxHQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUU7b0JBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzdEO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsc0RBQXFCOzs7OztJQUFyQixVQUFzQixLQUFLLEVBQUUsTUFBTTs7WUFDM0IsUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNO1FBQy9CLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7O2dCQXJIRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG9CQUFvQjtpQkFDM0I7O0lBcUhELDZCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0FwSFksc0JBQXNCOzs7SUFFakMsa0RBaUNFOztJQUNGLHdDQXlCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29yZFZhbHVlcywgU1VCX1RXRU5USUVTX01BUFBJTkcsIFRFTlRIX01BUFBJTkcgfSBmcm9tICcuL2hpbmR1LWFyYWJpYy13b3JkLW1hcCc7XHJcbmltcG9ydCB7IE1pbk1heCB9IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0b0hpbmR1QXJhYmljV29yZHMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb0hpbmR1QXJhYmljV29yZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHN1Ykh1bmRyZWRSYW5nZXM6IE1pbk1heFtdID0gW1xyXG4gICAge1xyXG4gICAgICBtaW46IDIwLFxyXG4gICAgICBtYXg6IDMwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDMwLFxyXG4gICAgICBtYXg6IDQwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDQwLFxyXG4gICAgICBtYXg6IDUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDUwLFxyXG4gICAgICBtYXg6IDYwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDYwLFxyXG4gICAgICBtYXg6IDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDcwLFxyXG4gICAgICBtYXg6IDgwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDgwLFxyXG4gICAgICBtYXg6IDkwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IDkwLFxyXG4gICAgICBtYXg6IDEwMFxyXG4gICAgfVxyXG4gIF07XHJcbiAgcmFuZ2VzOiBNaW5NYXhbXSA9IFtcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLmh1bmRyZWQsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy50aG91c2FuZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLnRob3VzYW5kLFxyXG4gICAgICBtYXg6IFdvcmRWYWx1ZXMubGFraFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLmxha2gsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy5jcm9yZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLmNyb3JlLFxyXG4gICAgICBtYXg6IFdvcmRWYWx1ZXMuYXJhYlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLmFyYWIsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy5raGFyYWJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogV29yZFZhbHVlcy5raGFyYWIsXHJcbiAgICAgIG1heDogMTAwICogV29yZFZhbHVlcy5raGFyYWJcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSAnbnVtYmVyJykge1xyXG4gICAgICBpZiAoaXNOYU4oK3ZhbHVlKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHZhbHVlIG5vdCBudW1iZXI6ICR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gUGxlYXNlIGVuc3VyZSB0aGUgdmFsdWUgaXMgYSBudW1iZXJgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYCcke3ZhbHVlfScgY29udmVydGVkIHRvIG51bWJlcjogZm9yIGJlc3QgcmVzdWx0cywgcGxlYXNlIGVuc3VyZSB5b3UgcHJvdmlkZSBudW1iZXIgaW5zdGVhZCBvZiBzdHJpbmdgXHJcbiAgICAgICk7XHJcbiAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLmNvbnZlcnRUb1dvcmQodmFsdWUpO1xyXG4gICAgcmV0dXJuIHdvcmRzLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUb1dvcmQobnVtYmVyLCB3b3JkcyA9IFtdLCBpZ25vcmVaZXJvID0gZmFsc2UpIHtcclxuICAgIGlmIChudW1iZXIgPiAoMTAwICogV29yZFZhbHVlcy5raGFyYWIpKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHZhbHVlIG5vdCBzdXBwb3J0ZWQ6ICR7bnVtYmVyfSBleGNlZWRzIHRoZSBtYXggdmFsdWUgd2hpY2ggaXMgOTk5IHRyaWxsaW9uYCk7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIGlmIChudW1iZXIgPCAwKSB7XHJcbiAgICAgIHdvcmRzLnB1c2goJ21pbnVzJyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1dvcmQoTWF0aC5hYnMobnVtYmVyKSwgd29yZHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlciA8PSAyMCkge1xyXG4gICAgICBpZiAobnVtYmVyID09PSAwICYmIGlnbm9yZVplcm8pIHtcclxuICAgICAgICByZXR1cm4gd29yZHM7XHJcbiAgICAgIH1cclxuICAgICAgd29yZHMucHVzaChTVUJfVFdFTlRJRVNfTUFQUElOR1tudW1iZXJdKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG1pbk1heCBvZiB0aGlzLnN1Ykh1bmRyZWRSYW5nZXMpIHtcclxuICAgICAgaWYgKG51bWJlciA+PSBtaW5NYXgubWluICYmIG51bWJlciA8IG1pbk1heC5tYXgpIHtcclxuICAgICAgICB3b3Jkcy5wdXNoKC4uLnRoaXMuY29udmVydFJlbWluZGVyVG9Xb3JkKG51bWJlciwgbWluTWF4Lm1pbikpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBtaW5NYXggb2YgdGhpcy5yYW5nZXMpIHtcclxuICAgICAgaWYgKG51bWJlciA+PSBtaW5NYXgubWluICYmIG51bWJlciA8IG1pbk1heC5tYXgpIHtcclxuICAgICAgICBjb25zdCBwcmVmaXggPSB0aGlzLmNvbnZlcnRUb1dvcmQoK01hdGguZmxvb3IoKG51bWJlciAvIG1pbk1heC5taW4pKS50b0ZpeGVkKCkpO1xyXG4gICAgICAgIHdvcmRzLnB1c2goLi4ucHJlZml4LCBURU5USF9NQVBQSU5HW21pbk1heC5taW5dKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Xb3JkKG51bWJlciAlIG1pbk1heC5taW4sIHdvcmRzLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdvcmRzO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFJlbWluZGVyVG9Xb3JkKHZhbHVlLCBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJlbWluZGVyID0gdmFsdWUgJSBudW1iZXI7XHJcbiAgICByZXR1cm4gcmVtaW5kZXIgPyBbVEVOVEhfTUFQUElOR1tudW1iZXJdLCBTVUJfVFdFTlRJRVNfTUFQUElOR1tyZW1pbmRlcl1dIDogW1RFTlRIX01BUFBJTkdbbnVtYmVyXV07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=