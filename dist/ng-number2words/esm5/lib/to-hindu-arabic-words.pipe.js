/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { WordValues, SUB_TWENTIES_MAPPING, TENTH_MAPPING } from './hindu-arabic-word-map';
import { SUB_HUNDRED_NP, TENTH_MAPPING_NP } from './language-mapping/nepali';
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
     * @param {?=} language
     * @return {?}
     */
    ToHinduArabicWordsPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} language
     * @return {?}
     */
    function (value, language) {
        if (language === void 0) { language = 'en'; }
        if (typeof (value) !== 'number') {
            if (isNaN(+value)) {
                console.error("value not number: " + value + " is not a number. Please ensure the value is a number");
                return null;
            }
            console.warn("'" + value + "' converted to number: for best results, please ensure you provide number instead of string");
            value = +value;
        }
        /** @type {?} */
        var words = [];
        if (language === 'en') {
            words = this.convertToWord(value);
        }
        else {
            words = this.convertToLanguage(value, language);
        }
        return words.join(' ');
    };
    /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @param {?=} lang
     * @return {?}
     */
    ToHinduArabicWordsPipe.prototype.convertToWord = /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @param {?=} lang
     * @return {?}
     */
    function (number, words, ignoreZero, lang) {
        if (words === void 0) { words = []; }
        if (ignoreZero === void 0) { ignoreZero = false; }
        if (lang === void 0) { lang = 'en'; }
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
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    ToHinduArabicWordsPipe.prototype.convertToLanguage = /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    function (value, lang) {
        switch (lang) {
            case 'np':
                return this.convertToNepali(value);
        }
    };
    /**
     * @param {?} value
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    ToHinduArabicWordsPipe.prototype.convertToNepali = /**
     * @param {?} value
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    function (value, words, ignoreZero) {
        if (words === void 0) { words = []; }
        if (ignoreZero === void 0) { ignoreZero = false; }
        var e_3, _a;
        if (value > (100 * WordValues.kharab)) {
            console.error("value not supported: " + value + " exceeds the max value which is 999 trillion");
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
        try {
            for (var _b = tslib_1.__values(this.ranges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var minMax = _c.value;
                if (value >= minMax.min && value < minMax.max) {
                    /** @type {?} */
                    var prefix = this.convertToNepali(+Math.floor((value / minMax.min)).toFixed());
                    words.push.apply(words, tslib_1.__spread(prefix, [TENTH_MAPPING_NP[minMax.min]]));
                    return this.convertToNepali(value % minMax.min, words, true);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return words;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvdG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RTtJQUFBO1FBS0UscUJBQWdCLEdBQWE7WUFDM0I7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxFQUFFO2FBQ1I7WUFDRDtnQkFDRSxHQUFHLEVBQUUsRUFBRTtnQkFDUCxHQUFHLEVBQUUsRUFBRTthQUNSO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLEVBQUU7YUFDUjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxFQUFFO2dCQUNQLEdBQUcsRUFBRSxHQUFHO2FBQ1Q7U0FDRixDQUFDO1FBQ0YsV0FBTSxHQUFhO1lBQ2pCO2dCQUNFLEdBQUcsRUFBRSxVQUFVLENBQUMsT0FBTztnQkFDdkIsR0FBRyxFQUFFLFVBQVUsQ0FBQyxRQUFRO2FBQ3pCO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLFVBQVUsQ0FB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QUFDLElBQUU7b0JBQ3BELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzlEO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBMUpGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjs7SUEwSkQsNkJBQUM7Q0FBQSxBQTVKRCxJQTRKQztTQXpKWSxzQkFBc0I7OztJQUVqQyxrREFpQ0U7O0lBQ0Ysd0NBeUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3JkVmFsdWVzLCBTVUJfVFdFTlRJRVNfTUFQUElORywgVEVOVEhfTUFQUElORyB9IGZyb20gJy4vaGluZHUtYXJhYmljLXdvcmQtbWFwJztcclxuaW1wb3J0IHsgTWluTWF4IH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IFNVQl9IVU5EUkVEX05QLCBURU5USF9NQVBQSU5HX05QIH0gZnJvbSAnLi9sYW5ndWFnZS1tYXBwaW5nL25lcGFsaSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RvSGluZHVBcmFiaWNXb3JkcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvSGluZHVBcmFiaWNXb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgc3ViSHVuZHJlZFJhbmdlczogTWluTWF4W10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG1pbjogMjAsXHJcbiAgICAgIG1heDogMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogMzAsXHJcbiAgICAgIG1heDogNDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNDAsXHJcbiAgICAgIG1heDogNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNTAsXHJcbiAgICAgIG1heDogNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNjAsXHJcbiAgICAgIG1heDogNzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogNzAsXHJcbiAgICAgIG1heDogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogODAsXHJcbiAgICAgIG1heDogOTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1pbjogOTAsXHJcbiAgICAgIG1heDogMTAwXHJcbiAgICB9XHJcbiAgXTtcclxuICByYW5nZXM6IE1pbk1heFtdID0gW1xyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMuaHVuZHJlZCxcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLnRob3VzYW5kXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMudGhvdXNhbmQsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy5sYWtoXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMubGFraCxcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLmNyb3JlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMuY3JvcmUsXHJcbiAgICAgIG1heDogV29yZFZhbHVlcy5hcmFiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW46IFdvcmRWYWx1ZXMuYXJhYixcclxuICAgICAgbWF4OiBXb3JkVmFsdWVzLmtoYXJhYlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluOiBXb3JkVmFsdWVzLmtoYXJhYixcclxuICAgICAgbWF4OiAxMDAgKiBXb3JkVmFsdWVzLmtoYXJhYlxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgbGFuZ3VhZ2UgPSAnZW4nKTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgKHZhbHVlKSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgaWYgKGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGB2YWx1ZSBub3QgbnVtYmVyOiAke3ZhbHVlfSBpcyBub3QgYSBudW1iZXIuIFBsZWFzZSBlbnN1cmUgdGhlIHZhbHVlIGlzIGEgbnVtYmVyYCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGAnJHt2YWx1ZX0nIGNvbnZlcnRlZCB0byBudW1iZXI6IGZvciBiZXN0IHJlc3VsdHMsIHBsZWFzZSBlbnN1cmUgeW91IHByb3ZpZGUgbnVtYmVyIGluc3RlYWQgb2Ygc3RyaW5nYFxyXG4gICAgICApO1xyXG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgIH1cclxuICAgIGxldCB3b3Jkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gJ2VuJykge1xyXG4gICAgICB3b3JkcyA9IHRoaXMuY29udmVydFRvV29yZCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3b3JkcyA9IHRoaXMuY29udmVydFRvTGFuZ3VhZ2UodmFsdWUsIGxhbmd1YWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VG9Xb3JkKG51bWJlcjogbnVtYmVyLCB3b3JkcyA9IFtdLCBpZ25vcmVaZXJvID0gZmFsc2UsIGxhbmcgPSAnZW4nKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKG51bWJlciA+ICgxMDAgKiBXb3JkVmFsdWVzLmtoYXJhYikpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgdmFsdWUgbm90IHN1cHBvcnRlZDogJHtudW1iZXJ9IGV4Y2VlZHMgdGhlIG1heCB2YWx1ZSB3aGljaCBpcyA5OTkgdHJpbGxpb25gKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlciA8IDApIHtcclxuICAgICAgd29yZHMucHVzaCgnbWludXMnKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvV29yZChNYXRoLmFicyhudW1iZXIpLCB3b3Jkcyk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtYmVyIDw9IDIwKSB7XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDAgJiYgaWdub3JlWmVybykge1xyXG4gICAgICAgIHJldHVybiB3b3JkcztcclxuICAgICAgfVxyXG4gICAgICB3b3Jkcy5wdXNoKFNVQl9UV0VOVElFU19NQVBQSU5HW251bWJlcl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgbWluTWF4IG9mIHRoaXMuc3ViSHVuZHJlZFJhbmdlcykge1xyXG4gICAgICBpZiAobnVtYmVyID49IG1pbk1heC5taW4gJiYgbnVtYmVyIDwgbWluTWF4Lm1heCkge1xyXG4gICAgICAgIHdvcmRzLnB1c2goLi4udGhpcy5jb252ZXJ0UmVtaW5kZXJUb1dvcmQobnVtYmVyLCBtaW5NYXgubWluKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IG1pbk1heCBvZiB0aGlzLnJhbmdlcykge1xyXG4gICAgICBpZiAobnVtYmVyID49IG1pbk1heC5taW4gJiYgbnVtYmVyIDwgbWluTWF4Lm1heCkge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29udmVydFRvV29yZCgrTWF0aC5mbG9vcigobnVtYmVyIC8gbWluTWF4Lm1pbikpLnRvRml4ZWQoKSk7XHJcbiAgICAgICAgd29yZHMucHVzaCguLi5wcmVmaXgsIFRFTlRIX01BUFBJTkdbbWluTWF4Lm1pbl0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb1dvcmQobnVtYmVyICUgbWluTWF4Lm1pbiwgd29yZHMsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd29yZHM7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0UmVtaW5kZXJUb1dvcmQodmFsdWU6IG51bWJlciwgbnVtYmVyOiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCByZW1pbmRlciA9IHZhbHVlICUgbnVtYmVyO1xyXG4gICAgcmV0dXJuIHJlbWluZGVyID8gW1RFTlRIX01BUFBJTkdbbnVtYmVyXSwgU1VCX1RXRU5USUVTX01BUFBJTkdbcmVtaW5kZXJdXSA6IFtURU5USF9NQVBQSU5HW251bWJlcl1dO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFRvTGFuZ3VhZ2UodmFsdWU6IG51bWJlciwgbGFuZzogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgc3dpdGNoIChsYW5nKSB7XHJcbiAgICAgIGNhc2UgJ25wJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9OZXBhbGkodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udmVydFRvTmVwYWxpKHZhbHVlOiBudW1iZXIsIHdvcmRzID0gW10sIGlnbm9yZVplcm8gPSBmYWxzZSk6IHN0cmluZ1tdIHtcclxuICAgIGlmICh2YWx1ZSA+ICgxMDAgKiBXb3JkVmFsdWVzLmtoYXJhYikpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgdmFsdWUgbm90IHN1cHBvcnRlZDogJHt2YWx1ZX0gZXhjZWVkcyB0aGUgbWF4IHZhbHVlIHdoaWNoIGlzIDk5OSB0cmlsbGlvbmApO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgIHdvcmRzLnB1c2goJ+CkruCkvuCkh+CkqOCkuCcpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9Xb3JkKE1hdGguYWJzKHZhbHVlKSwgd29yZHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlIDwgMTAwKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gMCAmJiBpZ25vcmVaZXJvKSB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmRzO1xyXG4gICAgICB9XHJcbiAgICAgIHdvcmRzLnB1c2goU1VCX0hVTkRSRURfTlBbdmFsdWVdKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgbWluTWF4IG9mIHRoaXMucmFuZ2VzKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA+PSBtaW5NYXgubWluICYmIHZhbHVlIDwgbWluTWF4Lm1heCkge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29udmVydFRvTmVwYWxpKCtNYXRoLmZsb29yKCh2YWx1ZSAvIG1pbk1heC5taW4pKS50b0ZpeGVkKCkpO1xyXG4gICAgICAgIHdvcmRzLnB1c2goLi4ucHJlZml4LCBURU5USF9NQVBQSU5HX05QW21pbk1heC5taW5dKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9OZXBhbGkodmFsdWUgJSBtaW5NYXgubWluLCB3b3JkcywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB3b3JkcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==