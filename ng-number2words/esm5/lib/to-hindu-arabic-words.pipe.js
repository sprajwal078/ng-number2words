/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ConverterUtil } from './converterUtil';
import { WORD_MAPPING, WordValues } from './word-mapping';
var ToHinduArabicWordsPipe = /** @class */ (function () {
    function ToHinduArabicWordsPipe() {
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
        /** @type {?} */
        var converter = new ConverterUtil(value, WORD_MAPPING.hinduArabic[language].tenths, WORD_MAPPING.hinduArabic[language].subHundreds, (100 * WordValues.kharab - 1), WORD_MAPPING.hinduArabic[language].decimalWord, WORD_MAPPING.hinduArabic[language].negativeWord);
        return converter.getWords();
    };
    ToHinduArabicWordsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'toHinduArabicWords'
                },] }
    ];
    return ToHinduArabicWordsPipe;
}());
export { ToHinduArabicWordsPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvdG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFEO0lBQUE7SUFpQkEsQ0FBQzs7Ozs7O0lBWkMsMENBQVM7Ozs7O0lBQVQsVUFBVSxLQUFzQixFQUFFLFFBQWU7UUFBZix5QkFBQSxFQUFBLGVBQWU7O1lBQ3pDLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FDakMsS0FBSyxFQUNMLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUN6QyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFDOUMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDN0IsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQzlDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUNoRDtRQUNELE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQWZGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjs7SUFlRCw2QkFBQztDQUFBLEFBakJELElBaUJDO1NBZFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb252ZXJ0ZXJVdGlsIH0gZnJvbSAnLi9jb252ZXJ0ZXJVdGlsJztcclxuaW1wb3J0IHsgV09SRF9NQVBQSU5HLCBXb3JkVmFsdWVzIH0gZnJvbSAnLi93b3JkLW1hcHBpbmcnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0b0hpbmR1QXJhYmljV29yZHMnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb0hpbmR1QXJhYmljV29yZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBsYW5ndWFnZSA9ICdlbicpOiBhbnkge1xyXG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IENvbnZlcnRlclV0aWwoXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBXT1JEX01BUFBJTkcuaGluZHVBcmFiaWNbbGFuZ3VhZ2VdLnRlbnRocyxcclxuICAgICAgV09SRF9NQVBQSU5HLmhpbmR1QXJhYmljW2xhbmd1YWdlXS5zdWJIdW5kcmVkcyxcclxuICAgICAgKDEwMCAqIFdvcmRWYWx1ZXMua2hhcmFiIC0gMSksXHJcbiAgICAgIFdPUkRfTUFQUElORy5oaW5kdUFyYWJpY1tsYW5ndWFnZV0uZGVjaW1hbFdvcmQsXHJcbiAgICAgIFdPUkRfTUFQUElORy5oaW5kdUFyYWJpY1tsYW5ndWFnZV0ubmVnYXRpdmVXb3JkXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRlci5nZXRXb3JkcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19