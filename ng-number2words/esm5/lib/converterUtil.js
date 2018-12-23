/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WORD_MAPPING, WordValues } from './word-mapping';
var ConverterUtil = /** @class */ (function () {
    function ConverterUtil(value, tenthMapping, subHundredMapping, max, decimalNotation, negativeNotation) {
        if (tenthMapping === void 0) { tenthMapping = WORD_MAPPING.international.en.tenths; }
        if (subHundredMapping === void 0) { subHundredMapping = WORD_MAPPING.international.en.subHundreds; }
        if (max === void 0) { max = (1000 * WordValues.trillion - 1); }
        if (decimalNotation === void 0) { decimalNotation = 'point'; }
        if (negativeNotation === void 0) { negativeNotation = 'minus'; }
        this.words = [];
        if (typeof (value) === 'string') {
            if (isNaN(+value)) {
                console.error("value not number: " + value + " is not a number. Please ensure the value is a number");
            }
            value = +value;
        }
        if (value > max) {
            console.error("value not supported: " + value + " exceeds the max value");
        }
        this.value = value;
        if ((this.value || this.value === 0) && value <= max) {
            value = +value;
            this.tenthMapping = tenthMapping;
            this.subHundredMapping = subHundredMapping;
            this.maxValue = max;
            this.decimalNotation = decimalNotation;
            this.negativeNotation = negativeNotation;
            /** @type {?} */
            var isNegative = value < 0;
            //  deal with negative number
            if (isNegative) {
                value = Math.abs(value);
                this.words = [this.negativeNotation];
            }
            // deal with decimal number
            /** @type {?} */
            var decimalWords = [];
            /** @type {?} */
            var valueAfterPoint = /\.\d+/.exec(value.toString());
            if (valueAfterPoint) {
                decimalWords = this.convertDecimalToWords(valueAfterPoint[0]);
            }
            value = Math.floor(value);
            this.words = tslib_1.__spread(this.words, this.convertToWords(value), decimalWords);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ConverterUtil.prototype.convertToWords = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined) {
            return [];
        }
        // to convert the number to words we first check if the number is below 100
        //  if below 100 then simply use the convertSubHundredToWords() and set wordsValue
        if (value < 100) {
            return this.convertSubHundredToWords(value);
        }
        //  if the value is over 99 we first find the length of the string of the value
        //  eg if the value is 1234513, the length is 7.
        //  then we find which category of the mapping does the current number falls in
        //  eg, when length is 7, the value falls under the 1000000: 'million' category
        // to do this we get the 10 power (length-1), then check if the value exists in the mapping
        /** @type {?} */
        var length = value.toString().length;
        /** @type {?} */
        var pow10 = Math.pow(10, (length - 1));
        // it is not necessary that the length matches a category
        // eg, when length is 5, the value falls under the 'ten thousand' category
        // but the mapping for ten thousand doesn't exist in the map
        // so we have to keep dividing the power by 10 until we find the appropriate match
        /** @type {?} */
        var category = '';
        while (!category) {
            category = this.tenthMapping[pow10] || '';
            if (!category) {
                pow10 /= 10;
            }
        }
        // since we found the category, we will now separate the number by the number of 0 in the pow10
        // eg if value is 12340, pow10 is 1000, so we want to separae 12 and 34o so we can make it 'twelve' 'thousand'
        // we could divide the number by the pow10 but for numbers like 1230, the 0 is lost during the operation
        /** @type {?} */
        var numberof0s = /0+/.exec(pow10.toString())[0].length;
        /** @type {?} */
        var prefix = value.toString().slice(0, length - numberof0s);
        /** @type {?} */
        var suffix = +value.toString().slice(-numberof0s);
        return tslib_1.__spread(this.convertToWords(+prefix), [category], this.convertToWords(suffix ? suffix : null));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ConverterUtil.prototype.convertSubHundredToWords = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // return the value if it already exists on the subHundredMapping object
        // eg, if subHundredMapping has {1: 'one'} and the value passed is 1
        // we return ['one']
        if (this.subHundredMapping[value]) {
            return [this.subHundredMapping[value]];
        }
        // divide the number by 10 then get the suffix and prefix so we can convert them to words
        // eg, if the value passed is 23, we divide it by 10, so we get 2.3
        // now we can multiply 2 by 10 and map (each 20 and 3) it using the subHundredMapping object
        // so the result is ['twenty', 'three']
        /** @type {?} */
        var splitValue = (value / 10).toString().split('.');
        return [this.tenthMapping[+splitValue[0] * 10], this.subHundredMapping[splitValue[1]]];
    };
    /**
     * @param {?} decimal
     * @return {?}
     */
    ConverterUtil.prototype.convertDecimalToWords = /**
     * @param {?} decimal
     * @return {?}
     */
    function (decimal) {
        var _this = this;
        /** @type {?} */
        var decimalValues = decimal.split('');
        return decimalValues.map(function (dec) {
            if (dec === '.') {
                return _this.decimalNotation;
            }
            return _this.subHundredMapping[dec];
        });
    };
    /**
     * @return {?}
     */
    ConverterUtil.prototype.getWords = /**
     * @return {?}
     */
    function () {
        return this.words.filter(function (word) { return !!word; }).join(' ');
    };
    return ConverterUtil;
}());
export { ConverterUtil };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConverterUtil.prototype.words;
    /** @type {?} */
    ConverterUtil.prototype.value;
    /** @type {?} */
    ConverterUtil.prototype.maxValue;
    /** @type {?} */
    ConverterUtil.prototype.tenthMapping;
    /** @type {?} */
    ConverterUtil.prototype.subHundredMapping;
    /** @type {?} */
    ConverterUtil.prototype.decimalNotation;
    /** @type {?} */
    ConverterUtil.prototype.negativeNotation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyVXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW51bWJlcjJ3b3Jkcy8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJ0ZXJVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRDtJQVNFLHVCQUNFLEtBQXNCLEVBQ3RCLFlBQXdELEVBQ3hELGlCQUFrRSxFQUNsRSxHQUE4QyxFQUM5QyxlQUF5QixFQUN6QixnQkFBMEI7UUFKMUIsNkJBQUEsRUFBQSxlQUFvQixZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1FBQ3hELGtDQUFBLEVBQUEsb0JBQXlCLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFdBQVc7UUFDbEUsb0JBQUEsRUFBQSxPQUFlLElBQUksR0FBRyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QyxnQ0FBQSxFQUFBLHlCQUF5QjtRQUN6QixpQ0FBQSxFQUFBLDBCQUEwQjtRQWRwQixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBZ0IzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBcUIsS0FBSywwREFBdUQsQ0FBQyxDQUFDO2FBQ2xHO1lBQ0QsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQywwQkFBd0IsS0FBSywyQkFBd0IsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFD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TUFQUElORywgV29yZFZhbHVlcyB9IGZyb20gJy4vd29yZC1tYXBwaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJ0ZXJVdGlsIHtcclxuICBwcml2YXRlIHdvcmRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbWF4VmFsdWU6IG51bWJlcjtcclxuICB0ZW50aE1hcHBpbmc6IGFueTtcclxuICBzdWJIdW5kcmVkTWFwcGluZzogYW55O1xyXG4gIGRlY2ltYWxOb3RhdGlvbjogc3RyaW5nO1xyXG4gIG5lZ2F0aXZlTm90YXRpb246IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgdGVudGhNYXBwaW5nOiBhbnkgPSBXT1JEX01BUFBJTkcuaW50ZXJuYXRpb25hbC5lbi50ZW50aHMsXHJcbiAgICBzdWJIdW5kcmVkTWFwcGluZzogYW55ID0gV09SRF9NQVBQSU5HLmludGVybmF0aW9uYWwuZW4uc3ViSHVuZHJlZHMsXHJcbiAgICBtYXg6IG51bWJlciA9ICgxMDAwICogV29yZFZhbHVlcy50cmlsbGlvbiAtIDEpLFxyXG4gICAgZGVjaW1hbE5vdGF0aW9uID0gJ3BvaW50JyxcclxuICAgIG5lZ2F0aXZlTm90YXRpb24gPSAnbWludXMnXHJcbiAgKSB7XHJcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgdmFsdWUgbm90IG51bWJlcjogJHt2YWx1ZX0gaXMgbm90IGEgbnVtYmVyLiBQbGVhc2UgZW5zdXJlIHRoZSB2YWx1ZSBpcyBhIG51bWJlcmApO1xyXG4gICAgICB9XHJcbiAgICAgIHZhbHVlID0gK3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID4gbWF4KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHZhbHVlIG5vdCBzdXBwb3J0ZWQ6ICR7dmFsdWV9IGV4Y2VlZHMgdGhlIG1heCB2YWx1ZWApO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUgPT09IDApICYmIHZhbHVlIDw9IG1heCkge1xyXG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgICAgdGhpcy50ZW50aE1hcHBpbmcgPSB0ZW50aE1hcHBpbmc7XHJcbiAgICAgIHRoaXMuc3ViSHVuZHJlZE1hcHBpbmcgPSBzdWJIdW5kcmVkTWFwcGluZztcclxuICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1heDtcclxuICAgICAgdGhpcy5kZWNpbWFsTm90YXRpb24gPSBkZWNpbWFsTm90YXRpb247XHJcbiAgICAgIHRoaXMubmVnYXRpdmVOb3RhdGlvbiA9IG5lZ2F0aXZlTm90YXRpb247XHJcbiAgICAgIGNvbnN0IGlzTmVnYXRpdmUgPSB2YWx1ZSA8IDA7XHJcbiAgICAgIC8vICBkZWFsIHdpdGggbmVnYXRpdmUgbnVtYmVyXHJcbiAgICAgIGlmIChpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy53b3JkcyA9IFt0aGlzLm5lZ2F0aXZlTm90YXRpb25dO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGRlYWwgd2l0aCBkZWNpbWFsIG51bWJlclxyXG4gICAgICBsZXQgZGVjaW1hbFdvcmRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICBjb25zdCB2YWx1ZUFmdGVyUG9pbnQgPSAvXFwuXFxkKy8uZXhlYyh2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgaWYgKHZhbHVlQWZ0ZXJQb2ludCkge1xyXG4gICAgICAgIGRlY2ltYWxXb3JkcyA9IHRoaXMuY29udmVydERlY2ltYWxUb1dvcmRzKHZhbHVlQWZ0ZXJQb2ludFswXSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuICAgICAgdGhpcy53b3JkcyA9IFsuLi50aGlzLndvcmRzLCAuLi50aGlzLmNvbnZlcnRUb1dvcmRzKHZhbHVlKSwgLi4uZGVjaW1hbFdvcmRzXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnZlcnRUb1dvcmRzKHZhbHVlOiBudW1iZXIgfCBudWxsKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgLy8gdG8gY29udmVydCB0aGUgbnVtYmVyIHRvIHdvcmRzIHdlIGZpcnN0IGNoZWNrIGlmIHRoZSBudW1iZXIgaXMgYmVsb3cgMTAwXHJcbiAgICAvLyAgaWYgYmVsb3cgMTAwIHRoZW4gc2ltcGx5IHVzZSB0aGUgY29udmVydFN1Ykh1bmRyZWRUb1dvcmRzKCkgYW5kIHNldCB3b3Jkc1ZhbHVlXHJcbiAgICBpZiAodmFsdWUgPCAxMDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFN1Ykh1bmRyZWRUb1dvcmRzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vICBpZiB0aGUgdmFsdWUgaXMgb3ZlciA5OSB3ZSBmaXJzdCBmaW5kIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBvZiB0aGUgdmFsdWVcclxuICAgIC8vICBlZyBpZiB0aGUgdmFsdWUgaXMgMTIzNDUxMywgdGhlIGxlbmd0aCBpcyA3LlxyXG4gICAgLy8gIHRoZW4gd2UgZmluZCB3aGljaCBjYXRlZ29yeSBvZiB0aGUgbWFwcGluZyBkb2VzIHRoZSBjdXJyZW50IG51bWJlciBmYWxscyBpblxyXG4gICAgLy8gIGVnLCB3aGVuIGxlbmd0aCBpcyA3LCB0aGUgdmFsdWUgZmFsbHMgdW5kZXIgdGhlIDEwMDAwMDA6ICdtaWxsaW9uJyBjYXRlZ29yeVxyXG4gICAgLy8gdG8gZG8gdGhpcyB3ZSBnZXQgdGhlIDEwIHBvd2VyIChsZW5ndGgtMSksIHRoZW4gY2hlY2sgaWYgdGhlIHZhbHVlIGV4aXN0cyBpbiB0aGUgbWFwcGluZ1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdmFsdWUudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICBsZXQgcG93MTAgPSAxMCAqKiAobGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgLy8gaXQgaXMgbm90IG5lY2Vzc2FyeSB0aGF0IHRoZSBsZW5ndGggbWF0Y2hlcyBhIGNhdGVnb3J5XHJcbiAgICAvLyBlZywgd2hlbiBsZW5ndGggaXMgNSwgdGhlIHZhbHVlIGZhbGxzIHVuZGVyIHRoZSAndGVuIHRob3VzYW5kJyBjYXRlZ29yeVxyXG4gICAgLy8gYnV0IHRoZSBtYXBwaW5nIGZvciB0ZW4gdGhvdXNhbmQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwXHJcbiAgICAvLyBzbyB3ZSBoYXZlIHRvIGtlZXAgZGl2aWRpbmcgdGhlIHBvd2VyIGJ5IDEwIHVudGlsIHdlIGZpbmQgdGhlIGFwcHJvcHJpYXRlIG1hdGNoXHJcbiAgICBsZXQgY2F0ZWdvcnkgPSAnJztcclxuICAgIHdoaWxlICghY2F0ZWdvcnkpIHtcclxuICAgICAgY2F0ZWdvcnkgPSB0aGlzLnRlbnRoTWFwcGluZ1twb3cxMF0gfHwgJyc7XHJcbiAgICAgIGlmICghY2F0ZWdvcnkpIHtcclxuICAgICAgICBwb3cxMCAvPSAxMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNpbmNlIHdlIGZvdW5kIHRoZSBjYXRlZ29yeSwgd2Ugd2lsbCBub3cgc2VwYXJhdGUgdGhlIG51bWJlciBieSB0aGUgbnVtYmVyIG9mIDAgaW4gdGhlIHBvdzEwXHJcbiAgICAvLyBlZyBpZiB2YWx1ZSBpcyAxMjM0MCwgcG93MTAgaXMgMTAwMCwgc28gd2Ugd2FudCB0byBzZXBhcmFlIDEyIGFuZCAzNG8gc28gd2UgY2FuIG1ha2UgaXQgJ3R3ZWx2ZScgJ3Rob3VzYW5kJ1xyXG4gICAgLy8gd2UgY291bGQgZGl2aWRlIHRoZSBudW1iZXIgYnkgdGhlIHBvdzEwIGJ1dCBmb3IgbnVtYmVycyBsaWtlIDEyMzAsIHRoZSAwIGlzIGxvc3QgZHVyaW5nIHRoZSBvcGVyYXRpb25cclxuICAgIGNvbnN0IG51bWJlcm9mMHMgPSAvMCsvLmV4ZWMocG93MTAudG9TdHJpbmcoKSlbMF0ubGVuZ3RoO1xyXG4gICAgY29uc3QgcHJlZml4ID0gdmFsdWUudG9TdHJpbmcoKS5zbGljZSgwLCBsZW5ndGggLSBudW1iZXJvZjBzKTtcclxuICAgIGNvbnN0IHN1ZmZpeCA9ICt2YWx1ZS50b1N0cmluZygpLnNsaWNlKC1udW1iZXJvZjBzKTtcclxuICAgIHJldHVybiBbLi4udGhpcy5jb252ZXJ0VG9Xb3JkcygrcHJlZml4KSwgY2F0ZWdvcnksIC4uLnRoaXMuY29udmVydFRvV29yZHMoc3VmZml4ID8gc3VmZml4IDogbnVsbCldO1xyXG4gIH1cclxuXHJcbiAgY29udmVydFN1Ykh1bmRyZWRUb1dvcmRzKHZhbHVlOiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICAvLyByZXR1cm4gdGhlIHZhbHVlIGlmIGl0IGFscmVhZHkgZXhpc3RzIG9uIHRoZSBzdWJIdW5kcmVkTWFwcGluZyBvYmplY3RcclxuICAgIC8vIGVnLCBpZiBzdWJIdW5kcmVkTWFwcGluZyBoYXMgezE6ICdvbmUnfSBhbmQgdGhlIHZhbHVlIHBhc3NlZCBpcyAxXHJcbiAgICAvLyB3ZSByZXR1cm4gWydvbmUnXVxyXG4gICAgaWYgKHRoaXMuc3ViSHVuZHJlZE1hcHBpbmdbdmFsdWVdKSB7XHJcbiAgICAgIHJldHVybiBbdGhpcy5zdWJIdW5kcmVkTWFwcGluZ1t2YWx1ZV1dO1xyXG4gICAgfVxyXG4gICAgLy8gZGl2aWRlIHRoZSBudW1iZXIgYnkgMTAgdGhlbiBnZXQgdGhlIHN1ZmZpeCBhbmQgcHJlZml4IHNvIHdlIGNhbiBjb252ZXJ0IHRoZW0gdG8gd29yZHNcclxuICAgIC8vIGVnLCBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIDIzLCB3ZSBkaXZpZGUgaXQgYnkgMTAsIHNvIHdlIGdldCAyLjNcclxuICAgIC8vIG5vdyB3ZSBjYW4gbXVsdGlwbHkgMiBieSAxMCBhbmQgbWFwIChlYWNoIDIwIGFuZCAzKSBpdCB1c2luZyB0aGUgc3ViSHVuZHJlZE1hcHBpbmcgb2JqZWN0XHJcbiAgICAvLyBzbyB0aGUgcmVzdWx0IGlzIFsndHdlbnR5JywgJ3RocmVlJ11cclxuICAgIGNvbnN0IHNwbGl0VmFsdWUgPSAodmFsdWUgLyAxMCkudG9TdHJpbmcoKS5zcGxpdCgnLicpOyAvLyBzcGxpdCB2YWx1ZSB3aWxsIGxvb2sgbGlrZSBbJzIwJywgJzMnXVxyXG4gICAgcmV0dXJuIFt0aGlzLnRlbnRoTWFwcGluZ1src3BsaXRWYWx1ZVswXSAqIDEwXSwgdGhpcy5zdWJIdW5kcmVkTWFwcGluZ1tzcGxpdFZhbHVlWzFdXV07XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0RGVjaW1hbFRvV29yZHMoZGVjaW1hbDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgZGVjaW1hbFZhbHVlcyA9IGRlY2ltYWwuc3BsaXQoJycpO1xyXG4gICAgcmV0dXJuIGRlY2ltYWxWYWx1ZXMubWFwKGRlYyA9PiB7XHJcbiAgICAgIGlmIChkZWMgPT09ICcuJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlY2ltYWxOb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5zdWJIdW5kcmVkTWFwcGluZ1tkZWNdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRXb3JkcygpIHtcclxuICAgIHJldHVybiB0aGlzLndvcmRzLmZpbHRlcih3b3JkID0+ICEhd29yZCkuam9pbignICcpO1xyXG4gIH1cclxufVxyXG4iXX0=