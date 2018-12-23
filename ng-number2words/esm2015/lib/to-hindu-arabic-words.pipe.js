/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ConverterUtil } from './converterUtil';
import { WORD_MAPPING, WordValues } from './word-mapping';
export class ToHinduArabicWordsPipe {
    /**
     * @param {?} value
     * @param {?=} language
     * @return {?}
     */
    transform(value, language = 'en') {
        /** @type {?} */
        const converter = new ConverterUtil(value, WORD_MAPPING.hinduArabic[language].tenths, WORD_MAPPING.hinduArabic[language].subHundreds, (100 * WordValues.kharab - 1), WORD_MAPPING.hinduArabic[language].decimalWord, WORD_MAPPING.hinduArabic[language].negativeWord);
        return converter.getWords();
    }
}
ToHinduArabicWordsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'toHinduArabicWords'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvdG8taGluZHUtYXJhYmljLXdvcmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzFELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUVqQyxTQUFTLENBQUMsS0FBc0IsRUFBRSxRQUFRLEdBQUcsSUFBSTs7Y0FDekMsU0FBUyxHQUFHLElBQUksYUFBYSxDQUNqQyxLQUFLLEVBQ0wsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQ3pDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUM5QyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUM3QixZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFDOUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQ2hEO1FBQ0QsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxvQkFBb0I7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnZlcnRlclV0aWwgfSBmcm9tICcuL2NvbnZlcnRlclV0aWwnO1xyXG5pbXBvcnQgeyBXT1JEX01BUFBJTkcsIFdvcmRWYWx1ZXMgfSBmcm9tICcuL3dvcmQtbWFwcGluZyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RvSGluZHVBcmFiaWNXb3JkcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvSGluZHVBcmFiaWNXb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGxhbmd1YWdlID0gJ2VuJyk6IGFueSB7XHJcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyVXRpbChcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIFdPUkRfTUFQUElORy5oaW5kdUFyYWJpY1tsYW5ndWFnZV0udGVudGhzLFxyXG4gICAgICBXT1JEX01BUFBJTkcuaGluZHVBcmFiaWNbbGFuZ3VhZ2VdLnN1Ykh1bmRyZWRzLFxyXG4gICAgICAoMTAwICogV29yZFZhbHVlcy5raGFyYWIgLSAxKSxcclxuICAgICAgV09SRF9NQVBQSU5HLmhpbmR1QXJhYmljW2xhbmd1YWdlXS5kZWNpbWFsV29yZCxcclxuICAgICAgV09SRF9NQVBQSU5HLmhpbmR1QXJhYmljW2xhbmd1YWdlXS5uZWdhdGl2ZVdvcmRcclxuICAgICk7XHJcbiAgICByZXR1cm4gY29udmVydGVyLmdldFdvcmRzKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=