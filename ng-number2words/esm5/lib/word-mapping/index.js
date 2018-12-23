/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TENTH_MAPPING_EN, SUB_TWENTIES_MAPPING_EN, HINDU_ARABIC_TENTH_MAPPING_EN } from './english';
import { TENTH_MAPPING_NP, SUB_HUNDRED_NP } from './nepali';
/** @type {?} */
export var WORD_MAPPING = {
    international: {
        en: {
            tenths: TENTH_MAPPING_EN,
            subHundreds: SUB_TWENTIES_MAPPING_EN,
            negativeWord: 'minus',
            decimalWord: 'point'
        },
    },
    hinduArabic: {
        en: {
            tenths: HINDU_ARABIC_TENTH_MAPPING_EN,
            subHundreds: SUB_TWENTIES_MAPPING_EN,
            negativeWord: 'minus',
            decimalWord: 'point'
        },
        np: {
            tenths: TENTH_MAPPING_NP,
            subHundreds: SUB_HUNDRED_NP,
            negativeWord: 'माइनस',
            decimalWord: 'दशमलब'
        }
    }
};
/** @enum {number} */
var WordValues = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
    billion: 1000000000,
    trillion: 1000000000000,
    // hindu arabic
    lakh: 100000,
    crore: 10000000,
    arab: 1000000000,
    kharab: 100000000000,
};
export { WordValues };
WordValues[WordValues.hundred] = 'hundred';
WordValues[WordValues.thousand] = 'thousand';
WordValues[WordValues.million] = 'million';
WordValues[WordValues.billion] = 'billion';
WordValues[WordValues.trillion] = 'trillion';
WordValues[WordValues.lakh] = 'lakh';
WordValues[WordValues.crore] = 'crore';
WordValues[WordValues.arab] = 'arab';
WordValues[WordValues.kharab] = 'kharab';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1udW1iZXIyd29yZHMvIiwic291cmNlcyI6WyJsaWIvd29yZC1tYXBwaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFNUQsTUFBTSxLQUFPLFlBQVksR0FBRztJQUMxQixhQUFhLEVBQUU7UUFDYixFQUFFLEVBQUU7WUFDRixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsWUFBWSxFQUFFLE9BQU87WUFDckIsV0FBVyxFQUFFLE9BQU87U0FDckI7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSw2QkFBNkI7WUFDckMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxZQUFZLEVBQUUsT0FBTztZQUNyQixXQUFXLEVBQUUsT0FBTztTQUNyQjtRQUNELEVBQUUsRUFBRTtZQUNGLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsV0FBVyxFQUFFLGNBQWM7WUFDM0IsWUFBWSxFQUFFLE9BQU87WUFDckIsV0FBVyxFQUFFLE9BQU87U0FDckI7S0FDRjtDQUNGOzs7SUFHQyxZQUFlO0lBQ2YsY0FBZ0I7SUFDaEIsZ0JBQW1CO0lBQ25CLG1CQUFzQjtJQUN0Qix1QkFBeUI7SUFFekIsZUFBZTtJQUNmLFlBQWtCO0lBQ2xCLGVBQW9CO0lBQ3BCLGdCQUFzQjtJQUN0QixvQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBURU5USF9NQVBQSU5HX0VOLCBTVUJfVFdFTlRJRVNfTUFQUElOR19FTiwgSElORFVfQVJBQklDX1RFTlRIX01BUFBJTkdfRU4gfSBmcm9tICcuL2VuZ2xpc2gnO1xyXG5pbXBvcnQgeyBURU5USF9NQVBQSU5HX05QLCBTVUJfSFVORFJFRF9OUCB9IGZyb20gJy4vbmVwYWxpJztcclxuXHJcbmV4cG9ydCBjb25zdCBXT1JEX01BUFBJTkcgPSB7XHJcbiAgaW50ZXJuYXRpb25hbDoge1xyXG4gICAgZW46IHtcclxuICAgICAgdGVudGhzOiBURU5USF9NQVBQSU5HX0VOLFxyXG4gICAgICBzdWJIdW5kcmVkczogU1VCX1RXRU5USUVTX01BUFBJTkdfRU4sXHJcbiAgICAgIG5lZ2F0aXZlV29yZDogJ21pbnVzJyxcclxuICAgICAgZGVjaW1hbFdvcmQ6ICdwb2ludCdcclxuICAgIH0sXHJcbiAgfSxcclxuICBoaW5kdUFyYWJpYzoge1xyXG4gICAgZW46IHtcclxuICAgICAgdGVudGhzOiBISU5EVV9BUkFCSUNfVEVOVEhfTUFQUElOR19FTixcclxuICAgICAgc3ViSHVuZHJlZHM6IFNVQl9UV0VOVElFU19NQVBQSU5HX0VOLFxyXG4gICAgICBuZWdhdGl2ZVdvcmQ6ICdtaW51cycsXHJcbiAgICAgIGRlY2ltYWxXb3JkOiAncG9pbnQnXHJcbiAgICB9LFxyXG4gICAgbnA6IHtcclxuICAgICAgdGVudGhzOiBURU5USF9NQVBQSU5HX05QLFxyXG4gICAgICBzdWJIdW5kcmVkczogU1VCX0hVTkRSRURfTlAsXHJcbiAgICAgIG5lZ2F0aXZlV29yZDogJ+CkruCkvuCkh+CkqOCkuCcsXHJcbiAgICAgIGRlY2ltYWxXb3JkOiAn4KSm4KS24KSu4KSy4KSsJ1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFdvcmRWYWx1ZXMge1xyXG4gIGh1bmRyZWQgICA9IDEwMCxcclxuICB0aG91c2FuZCAgPSAxMDAwLFxyXG4gIG1pbGxpb24gICA9IDEwMDAwMDAsXHJcbiAgYmlsbGlvbiAgID0gMTAwMDAwMDAwMCxcclxuICB0cmlsbGlvbiAgPSAxMDAwMDAwMDAwMDAwLFxyXG5cclxuICAvLyBoaW5kdSBhcmFiaWNcclxuICBsYWtoICAgICAgPSAxMDAwMDAsXHJcbiAgY3JvcmUgICAgID0gMTAwMDAwMDAsXHJcbiAgYXJhYiAgICAgID0gMTAwMDAwMDAwMCxcclxuICBraGFyYWIgICAgPSAxMDAwMDAwMDAwMDAsXHJcbn1cclxuIl19