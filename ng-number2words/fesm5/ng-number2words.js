import { __spread } from 'tslib';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TENTH_MAPPING_EN = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
};
/** @type {?} */
var SUB_TWENTIES_MAPPING_EN = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};
/** @type {?} */
var HINDU_ARABIC_TENTH_MAPPING_EN = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    100000: 'lakh',
    10000000: 'crore',
    1000000000: 'arab',
    100000000000: 'kharab',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SUB_HUNDRED_NP = [
    // 0 - 10
    'शून्य', 'एक', 'दुई', 'तीन', 'चार', 'पाँच', 'छ', 'सात', 'आठ', 'नौ', 'दश',
    // 11 - 20
    'एघार', 'बाह्र', 'तेह्र', 'चौध', 'पन्ध्र', 'सोह्र', 'सत्र', 'अठार', 'उन्नाइस', 'बीस',
    // 21 - 30उनन्तिस
    'एक्काइस', 'बाइस', 'त्येइस', 'चौबीस', 'पच्चीस', 'छब्बीस', 'सत्ताइस', 'अठ्ठाइस', 'उनन्तीस', 'तीस',
    // 31 - 40
    'एक्तीस', 'बत्तीस', 'तेत्तिस', 'चौंतीस', 'पैंतीस', 'छत्तीस', 'सर्तीस', 'अर्तीस', 'उनन्चालीस', 'चालीस',
    // 41 - 50
    'एकचालीस', 'बयालीस', 'त्रिचालीस', 'चवालीस', 'पैंतालीस', 'छयालीस', 'सर्चालीस', 'अर्चालीस', 'उनन्चास', 'पचास',
    // 51 - 60
    'एकाउन्न', 'बाउन्न', 'त्रिपन्न', 'चौवन्न', 'पचपन्न', 'छ्प्पन्न', 'सन्ताउन्न', 'अन्ठाउन्न', 'उनान्साठ्ठी', 'साठ्ठी',
    // 61 - 70
    'एकसट्ठी', 'बैसट्ठी', 'त्रिसट्ठी', 'चौंसठ्ठी', 'पैंसठ्ठी', 'छैंसठ्ठी', 'सर्सठ्ठी', 'अर्सठ्ठी', 'उनन्सत्तरी', 'सत्तरी',
    // 71 - 80
    'एकत्तर', 'बहत्तर', 'त्रीहत्तर', 'चौरत्तर', 'पचहत्तर', 'छयत्तर', 'सतहत्तर', 'अठहत्तर', 'उनास्सी', 'अस्सी',
    // 81 - 90
    'एकास्सी', 'बयास्सी', 'त्रियास्सी', 'चैरस्सी', 'पचास्सी', 'छायास्सी', 'सत्तास्सी', 'अठास्सी', 'उनन्नाब्बे', 'नब्बे',
    // 91 - 99
    'एकान्नब्बे', 'बयान्नब्बे', 'त्रियान्नब्बे', 'चौरान्नब्बे', 'पन्चान्नब्बे', 'छायान्नब्बे', 'सन्तान्नब्बे', 'अन्ठान्नब्बे', 'उनन्सय'
];
/** @type {?} */
var TENTH_MAPPING_NP = {
    1: 'एक',
    10: 'दश',
    100: 'सय',
    1000: 'हजार',
    100000: 'लाख',
    10000000: 'करोड',
    1000000000: 'अर्ब',
    100000000000: 'खर्ब'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WORD_MAPPING = {
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
WordValues[WordValues.hundred] = 'hundred';
WordValues[WordValues.thousand] = 'thousand';
WordValues[WordValues.million] = 'million';
WordValues[WordValues.billion] = 'billion';
WordValues[WordValues.trillion] = 'trillion';
WordValues[WordValues.lakh] = 'lakh';
WordValues[WordValues.crore] = 'crore';
WordValues[WordValues.arab] = 'arab';
WordValues[WordValues.kharab] = 'kharab';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            this.words = __spread(this.words, this.convertToWords(value), decimalWords);
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
        return __spread(this.convertToWords(+prefix), [category], this.convertToWords(suffix ? suffix : null));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToWordsPipe = /** @class */ (function () {
    function ToWordsPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ToWordsPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var converter = new ConverterUtil(value);
        return converter.getWords();
    };
    ToWordsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'toWords'
                },] }
    ];
    return ToWordsPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgNumber2wordsModule = /** @class */ (function () {
    function NgNumber2wordsModule() {
    }
    NgNumber2wordsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ToWordsPipe, ToHinduArabicWordsPipe],
                    exports: [ToWordsPipe, ToHinduArabicWordsPipe]
                },] }
    ];
    return NgNumber2wordsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgNumber2wordsModule, ToWordsPipe, ToHinduArabicWordsPipe };

//# sourceMappingURL=ng-number2words.js.map