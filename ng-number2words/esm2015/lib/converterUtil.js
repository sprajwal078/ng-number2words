/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { WORD_MAPPING, WordValues } from './word-mapping';
export class ConverterUtil {
    /**
     * @param {?} value
     * @param {?=} tenthMapping
     * @param {?=} subHundredMapping
     * @param {?=} max
     * @param {?=} decimalNotation
     * @param {?=} negativeNotation
     */
    constructor(value, tenthMapping = WORD_MAPPING.international.en.tenths, subHundredMapping = WORD_MAPPING.international.en.subHundreds, max = (1000 * WordValues.trillion - 1), decimalNotation = 'point', negativeNotation = 'minus') {
        this.words = [];
        if (typeof (value) === 'string') {
            if (isNaN(+value)) {
                console.error(`value not number: ${value} is not a number. Please ensure the value is a number`);
            }
            value = +value;
        }
        if (value > max) {
            console.error(`value not supported: ${value} exceeds the max value`);
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
            const isNegative = value < 0;
            //  deal with negative number
            if (isNegative) {
                value = Math.abs(value);
                this.words = [this.negativeNotation];
            }
            // deal with decimal number
            /** @type {?} */
            let decimalWords = [];
            /** @type {?} */
            const valueAfterPoint = /\.\d+/.exec(value.toString());
            if (valueAfterPoint) {
                decimalWords = this.convertDecimalToWords(valueAfterPoint[0]);
            }
            value = Math.floor(value);
            this.words = [...this.words, ...this.convertToWords(value), ...decimalWords];
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    convertToWords(value) {
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
        const length = value.toString().length;
        /** @type {?} */
        let pow10 = Math.pow(10, (length - 1));
        // it is not necessary that the length matches a category
        // eg, when length is 5, the value falls under the 'ten thousand' category
        // but the mapping for ten thousand doesn't exist in the map
        // so we have to keep dividing the power by 10 until we find the appropriate match
        /** @type {?} */
        let category = '';
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
        const numberof0s = /0+/.exec(pow10.toString())[0].length;
        /** @type {?} */
        const prefix = value.toString().slice(0, length - numberof0s);
        /** @type {?} */
        const suffix = +value.toString().slice(-numberof0s);
        return [...this.convertToWords(+prefix), category, ...this.convertToWords(suffix ? suffix : null)];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    convertSubHundredToWords(value) {
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
        const splitValue = (value / 10).toString().split('.');
        return [this.tenthMapping[+splitValue[0] * 10], this.subHundredMapping[splitValue[1]]];
    }
    /**
     * @param {?} decimal
     * @return {?}
     */
    convertDecimalToWords(decimal) {
        /** @type {?} */
        const decimalValues = decimal.split('');
        return decimalValues.map(dec => {
            if (dec === '.') {
                return this.decimalNotation;
            }
            return this.subHundredMapping[dec];
        });
    }
    /**
     * @return {?}
     */
    getWords() {
        return this.words.filter(word => !!word).join(' ');
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVyVXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW51bWJlcjJ3b3Jkcy8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJ0ZXJVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFELE1BQU0sT0FBTyxhQUFhOzs7Ozs7Ozs7SUFTeEIsWUFDRSxLQUFzQixFQUN0QixlQUFvQixZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQ3hELG9CQUF5QixZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQ2xFLE1BQWMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFDOUMsZUFBZSxHQUFHLE9BQU8sRUFDekIsZ0JBQWdCLEdBQUcsT0FBTztRQWRwQixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBZ0IzQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsS0FBSyx1REFBdUQsQ0FBQyxDQUFDO2FBQ2xHO1lBQ0QsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ3BELEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNmLElBQUks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QUFDO1NBQ3hDOzs7Ozs7Y0FLSyxVQUFVLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLE9BQWU7O2NBQzdCLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM3QjtZQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7Ozs7OztJQXBIQyw4QkFBNkI7O0lBQzdCLDhCQUF1Qjs7SUFDdkIsaUNBQWlCOztJQUNqQixxQ0FBa0I7O0lBQ2xCLDBDQUF1Qjs7SUFDdkIsd0NBQXdCOztJQUN4Qix5Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXT1JEX01BUFBJTkcsIFdvcmRWYWx1ZXMgfSBmcm9tICcuL3dvcmQtbWFwcGluZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVydGVyVXRpbCB7XHJcbiAgcHJpdmF0ZSB3b3Jkczogc3RyaW5nW10gPSBbXTtcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG1heFZhbHVlOiBudW1iZXI7XHJcbiAgdGVudGhNYXBwaW5nOiBhbnk7XHJcbiAgc3ViSHVuZHJlZE1hcHBpbmc6IGFueTtcclxuICBkZWNpbWFsTm90YXRpb246IHN0cmluZztcclxuICBuZWdhdGl2ZU5vdGF0aW9uOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHRlbnRoTWFwcGluZzogYW55ID0gV09SRF9NQVBQSU5HLmludGVybmF0aW9uYWwuZW4udGVudGhzLFxyXG4gICAgc3ViSHVuZHJlZE1hcHBpbmc6IGFueSA9IFdPUkRfTUFQUElORy5pbnRlcm5hdGlvbmFsLmVuLnN1Ykh1bmRyZWRzLFxyXG4gICAgbWF4OiBudW1iZXIgPSAoMTAwMCAqIFdvcmRWYWx1ZXMudHJpbGxpb24gLSAxKSxcclxuICAgIGRlY2ltYWxOb3RhdGlvbiA9ICdwb2ludCcsXHJcbiAgICBuZWdhdGl2ZU5vdGF0aW9uID0gJ21pbnVzJ1xyXG4gICkge1xyXG4gICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAoaXNOYU4oK3ZhbHVlKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHZhbHVlIG5vdCBudW1iZXI6ICR7dmFsdWV9IGlzIG5vdCBhIG51bWJlci4gUGxlYXNlIGVuc3VyZSB0aGUgdmFsdWUgaXMgYSBudW1iZXJgKTtcclxuICAgICAgfVxyXG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSA+IG1heCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGB2YWx1ZSBub3Qgc3VwcG9ydGVkOiAke3ZhbHVlfSBleGNlZWRzIHRoZSBtYXggdmFsdWVgKTtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGlmICgodGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlID09PSAwKSAmJiB2YWx1ZSA8PSBtYXgpIHtcclxuICAgICAgdmFsdWUgPSArdmFsdWU7XHJcbiAgICAgIHRoaXMudGVudGhNYXBwaW5nID0gdGVudGhNYXBwaW5nO1xyXG4gICAgICB0aGlzLnN1Ykh1bmRyZWRNYXBwaW5nID0gc3ViSHVuZHJlZE1hcHBpbmc7XHJcbiAgICAgIHRoaXMubWF4VmFsdWUgPSBtYXg7XHJcbiAgICAgIHRoaXMuZGVjaW1hbE5vdGF0aW9uID0gZGVjaW1hbE5vdGF0aW9uO1xyXG4gICAgICB0aGlzLm5lZ2F0aXZlTm90YXRpb24gPSBuZWdhdGl2ZU5vdGF0aW9uO1xyXG4gICAgICBjb25zdCBpc05lZ2F0aXZlID0gdmFsdWUgPCAwO1xyXG4gICAgICAvLyAgZGVhbCB3aXRoIG5lZ2F0aXZlIG51bWJlclxyXG4gICAgICBpZiAoaXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xyXG4gICAgICAgIHRoaXMud29yZHMgPSBbdGhpcy5uZWdhdGl2ZU5vdGF0aW9uXTtcclxuICAgICAgfVxyXG4gICAgICAvLyBkZWFsIHdpdGggZGVjaW1hbCBudW1iZXJcclxuICAgICAgbGV0IGRlY2ltYWxXb3Jkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgY29uc3QgdmFsdWVBZnRlclBvaW50ID0gL1xcLlxcZCsvLmV4ZWModmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIGlmICh2YWx1ZUFmdGVyUG9pbnQpIHtcclxuICAgICAgICBkZWNpbWFsV29yZHMgPSB0aGlzLmNvbnZlcnREZWNpbWFsVG9Xb3Jkcyh2YWx1ZUFmdGVyUG9pbnRbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgICAgIHRoaXMud29yZHMgPSBbLi4udGhpcy53b3JkcywgLi4udGhpcy5jb252ZXJ0VG9Xb3Jkcyh2YWx1ZSksIC4uLmRlY2ltYWxXb3Jkc107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VG9Xb3Jkcyh2YWx1ZTogbnVtYmVyIHwgbnVsbCk6IHN0cmluZ1tdIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIC8vIHRvIGNvbnZlcnQgdGhlIG51bWJlciB0byB3b3JkcyB3ZSBmaXJzdCBjaGVjayBpZiB0aGUgbnVtYmVyIGlzIGJlbG93IDEwMFxyXG4gICAgLy8gIGlmIGJlbG93IDEwMCB0aGVuIHNpbXBseSB1c2UgdGhlIGNvbnZlcnRTdWJIdW5kcmVkVG9Xb3JkcygpIGFuZCBzZXQgd29yZHNWYWx1ZVxyXG4gICAgaWYgKHZhbHVlIDwgMTAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRTdWJIdW5kcmVkVG9Xb3Jkcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyAgaWYgdGhlIHZhbHVlIGlzIG92ZXIgOTkgd2UgZmlyc3QgZmluZCB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgb2YgdGhlIHZhbHVlXHJcbiAgICAvLyAgZWcgaWYgdGhlIHZhbHVlIGlzIDEyMzQ1MTMsIHRoZSBsZW5ndGggaXMgNy5cclxuICAgIC8vICB0aGVuIHdlIGZpbmQgd2hpY2ggY2F0ZWdvcnkgb2YgdGhlIG1hcHBpbmcgZG9lcyB0aGUgY3VycmVudCBudW1iZXIgZmFsbHMgaW5cclxuICAgIC8vICBlZywgd2hlbiBsZW5ndGggaXMgNywgdGhlIHZhbHVlIGZhbGxzIHVuZGVyIHRoZSAxMDAwMDAwOiAnbWlsbGlvbicgY2F0ZWdvcnlcclxuICAgIC8vIHRvIGRvIHRoaXMgd2UgZ2V0IHRoZSAxMCBwb3dlciAobGVuZ3RoLTEpLCB0aGVuIGNoZWNrIGlmIHRoZSB2YWx1ZSBleGlzdHMgaW4gdGhlIG1hcHBpbmdcclxuICAgIGNvbnN0IGxlbmd0aCA9IHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgbGV0IHBvdzEwID0gMTAgKiogKGxlbmd0aCAtIDEpO1xyXG5cclxuICAgIC8vIGl0IGlzIG5vdCBuZWNlc3NhcnkgdGhhdCB0aGUgbGVuZ3RoIG1hdGNoZXMgYSBjYXRlZ29yeVxyXG4gICAgLy8gZWcsIHdoZW4gbGVuZ3RoIGlzIDUsIHRoZSB2YWx1ZSBmYWxscyB1bmRlciB0aGUgJ3RlbiB0aG91c2FuZCcgY2F0ZWdvcnlcclxuICAgIC8vIGJ1dCB0aGUgbWFwcGluZyBmb3IgdGVuIHRob3VzYW5kIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcFxyXG4gICAgLy8gc28gd2UgaGF2ZSB0byBrZWVwIGRpdmlkaW5nIHRoZSBwb3dlciBieSAxMCB1bnRpbCB3ZSBmaW5kIHRoZSBhcHByb3ByaWF0ZSBtYXRjaFxyXG4gICAgbGV0IGNhdGVnb3J5ID0gJyc7XHJcbiAgICB3aGlsZSAoIWNhdGVnb3J5KSB7XHJcbiAgICAgIGNhdGVnb3J5ID0gdGhpcy50ZW50aE1hcHBpbmdbcG93MTBdIHx8ICcnO1xyXG4gICAgICBpZiAoIWNhdGVnb3J5KSB7XHJcbiAgICAgICAgcG93MTAgLz0gMTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzaW5jZSB3ZSBmb3VuZCB0aGUgY2F0ZWdvcnksIHdlIHdpbGwgbm93IHNlcGFyYXRlIHRoZSBudW1iZXIgYnkgdGhlIG51bWJlciBvZiAwIGluIHRoZSBwb3cxMFxyXG4gICAgLy8gZWcgaWYgdmFsdWUgaXMgMTIzNDAsIHBvdzEwIGlzIDEwMDAsIHNvIHdlIHdhbnQgdG8gc2VwYXJhZSAxMiBhbmQgMzRvIHNvIHdlIGNhbiBtYWtlIGl0ICd0d2VsdmUnICd0aG91c2FuZCdcclxuICAgIC8vIHdlIGNvdWxkIGRpdmlkZSB0aGUgbnVtYmVyIGJ5IHRoZSBwb3cxMCBidXQgZm9yIG51bWJlcnMgbGlrZSAxMjMwLCB0aGUgMCBpcyBsb3N0IGR1cmluZyB0aGUgb3BlcmF0aW9uXHJcbiAgICBjb25zdCBudW1iZXJvZjBzID0gLzArLy5leGVjKHBvdzEwLnRvU3RyaW5nKCkpWzBdLmxlbmd0aDtcclxuICAgIGNvbnN0IHByZWZpeCA9IHZhbHVlLnRvU3RyaW5nKCkuc2xpY2UoMCwgbGVuZ3RoIC0gbnVtYmVyb2Ywcyk7XHJcbiAgICBjb25zdCBzdWZmaXggPSArdmFsdWUudG9TdHJpbmcoKS5zbGljZSgtbnVtYmVyb2Ywcyk7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuY29udmVydFRvV29yZHMoK3ByZWZpeCksIGNhdGVnb3J5LCAuLi50aGlzLmNvbnZlcnRUb1dvcmRzKHN1ZmZpeCA/IHN1ZmZpeCA6IG51bGwpXTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRTdWJIdW5kcmVkVG9Xb3Jkcyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgLy8gcmV0dXJuIHRoZSB2YWx1ZSBpZiBpdCBhbHJlYWR5IGV4aXN0cyBvbiB0aGUgc3ViSHVuZHJlZE1hcHBpbmcgb2JqZWN0XHJcbiAgICAvLyBlZywgaWYgc3ViSHVuZHJlZE1hcHBpbmcgaGFzIHsxOiAnb25lJ30gYW5kIHRoZSB2YWx1ZSBwYXNzZWQgaXMgMVxyXG4gICAgLy8gd2UgcmV0dXJuIFsnb25lJ11cclxuICAgIGlmICh0aGlzLnN1Ykh1bmRyZWRNYXBwaW5nW3ZhbHVlXSkge1xyXG4gICAgICByZXR1cm4gW3RoaXMuc3ViSHVuZHJlZE1hcHBpbmdbdmFsdWVdXTtcclxuICAgIH1cclxuICAgIC8vIGRpdmlkZSB0aGUgbnVtYmVyIGJ5IDEwIHRoZW4gZ2V0IHRoZSBzdWZmaXggYW5kIHByZWZpeCBzbyB3ZSBjYW4gY29udmVydCB0aGVtIHRvIHdvcmRzXHJcbiAgICAvLyBlZywgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyAyMywgd2UgZGl2aWRlIGl0IGJ5IDEwLCBzbyB3ZSBnZXQgMi4zXHJcbiAgICAvLyBub3cgd2UgY2FuIG11bHRpcGx5IDIgYnkgMTAgYW5kIG1hcCAoZWFjaCAyMCBhbmQgMykgaXQgdXNpbmcgdGhlIHN1Ykh1bmRyZWRNYXBwaW5nIG9iamVjdFxyXG4gICAgLy8gc28gdGhlIHJlc3VsdCBpcyBbJ3R3ZW50eScsICd0aHJlZSddXHJcbiAgICBjb25zdCBzcGxpdFZhbHVlID0gKHZhbHVlIC8gMTApLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTsgLy8gc3BsaXQgdmFsdWUgd2lsbCBsb29rIGxpa2UgWycyMCcsICczJ11cclxuICAgIHJldHVybiBbdGhpcy50ZW50aE1hcHBpbmdbK3NwbGl0VmFsdWVbMF0gKiAxMF0sIHRoaXMuc3ViSHVuZHJlZE1hcHBpbmdbc3BsaXRWYWx1ZVsxXV1dO1xyXG4gIH1cclxuXHJcbiAgY29udmVydERlY2ltYWxUb1dvcmRzKGRlY2ltYWw6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGRlY2ltYWxWYWx1ZXMgPSBkZWNpbWFsLnNwbGl0KCcnKTtcclxuICAgIHJldHVybiBkZWNpbWFsVmFsdWVzLm1hcChkZWMgPT4ge1xyXG4gICAgICBpZiAoZGVjID09PSAnLicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWNpbWFsTm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuc3ViSHVuZHJlZE1hcHBpbmdbZGVjXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0V29yZHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53b3Jkcy5maWx0ZXIod29yZCA9PiAhIXdvcmQpLmpvaW4oJyAnKTtcclxuICB9XHJcbn1cclxuIl19