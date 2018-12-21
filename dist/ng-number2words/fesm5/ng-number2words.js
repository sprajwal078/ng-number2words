import { __values, __spread } from 'tslib';
import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var WordValues = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
    billion: 1000000000,
    trillion: 1000000000000,
};
WordValues[WordValues.hundred] = 'hundred';
WordValues[WordValues.thousand] = 'thousand';
WordValues[WordValues.million] = 'million';
WordValues[WordValues.billion] = 'billion';
WordValues[WordValues.trillion] = 'trillion';
/** @type {?} */
var SUB_TWENTIES_MAPPING = {
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
    20: 'twenty'
};
/** @type {?} */
var TENTH_MAPPING = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToWordsPipe = /** @class */ (function () {
    function ToWordsPipe() {
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
    ToWordsPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
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
    ToWordsPipe.prototype.convertToWord = /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    function (number, words, ignoreZero) {
        if (words === void 0) { words = []; }
        if (ignoreZero === void 0) { ignoreZero = false; }
        var e_1, _a, e_2, _b;
        if (number > (999 * WordValues.trillion)) {
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
            for (var _c = __values(this.subHundredRanges), _d = _c.next(); !_d.done; _d = _c.next()) {
                var minMax = _d.value;
                if (number >= minMax.min && number < minMax.max) {
                    words.push.apply(words, __spread(this.convertReminderToWord(number, minMax.min)));
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
            for (var _e = __values(this.ranges), _f = _e.next(); !_f.done; _f = _e.next()) {
                var minMax = _f.value;
                if (number >= minMax.min && number < minMax.max) {
                    /** @type {?} */
                    var prefix = this.convertToWord(+Math.floor((number / minMax.min)).toFixed());
                    words.push.apply(words, __spread(prefix, [TENTH_MAPPING[minMax.min]]));
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
    ToWordsPipe.prototype.convertReminderToWord = /**
     * @param {?} value
     * @param {?} number
     * @return {?}
     */
    function (value, number) {
        /** @type {?} */
        var reminder = value % number;
        return reminder ? [TENTH_MAPPING[number], SUB_TWENTIES_MAPPING[reminder]] : [TENTH_MAPPING[number]];
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
/** @enum {number} */
var WordValues$1 = {
    hundred: 100,
    thousand: 1000,
    lakh: 100000,
    crore: 10000000,
    arab: 1000000000,
    kharab: 100000000000,
};
WordValues$1[WordValues$1.hundred] = 'hundred';
WordValues$1[WordValues$1.thousand] = 'thousand';
WordValues$1[WordValues$1.lakh] = 'lakh';
WordValues$1[WordValues$1.crore] = 'crore';
WordValues$1[WordValues$1.arab] = 'arab';
WordValues$1[WordValues$1.kharab] = 'kharab';
/** @type {?} */
var SUB_TWENTIES_MAPPING$1 = {
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
    20: 'twenty'
};
/** @type {?} */
var TENTH_MAPPING$1 = {
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
                min: WordValues$1.hundred,
                max: WordValues$1.thousand
            },
            {
                min: WordValues$1.thousand,
                max: WordValues$1.lakh
            },
            {
                min: WordValues$1.lakh,
                max: WordValues$1.crore
            },
            {
                min: WordValues$1.crore,
                max: WordValues$1.arab
            },
            {
                min: WordValues$1.arab,
                max: WordValues$1.kharab
            },
            {
                min: WordValues$1.kharab,
                max: 100 * WordValues$1.kharab
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
        if (number > (100 * WordValues$1.kharab)) {
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
            words.push(SUB_TWENTIES_MAPPING$1[number]);
        }
        try {
            for (var _c = __values(this.subHundredRanges), _d = _c.next(); !_d.done; _d = _c.next()) {
                var minMax = _d.value;
                if (number >= minMax.min && number < minMax.max) {
                    words.push.apply(words, __spread(this.convertReminderToWord(number, minMax.min)));
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
            for (var _e = __values(this.ranges), _f = _e.next(); !_f.done; _f = _e.next()) {
                var minMax = _f.value;
                if (number >= minMax.min && number < minMax.max) {
                    /** @type {?} */
                    var prefix = this.convertToWord(+Math.floor((number / minMax.min)).toFixed());
                    words.push.apply(words, __spread(prefix, [TENTH_MAPPING$1[minMax.min]]));
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
        return reminder ? [TENTH_MAPPING$1[number], SUB_TWENTIES_MAPPING$1[reminder]] : [TENTH_MAPPING$1[number]];
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
        if (value > (100 * WordValues$1.kharab)) {
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
            for (var _b = __values(this.ranges), _c = _b.next(); !_c.done; _c = _b.next()) {
                var minMax = _c.value;
                if (value >= minMax.min && value < minMax.max) {
                    /** @type {?} */
                    var prefix = this.convertToNepali(+Math.floor((value / minMax.min)).toFixed());
                    words.push.apply(words, __spread(prefix, [TENTH_MAPPING_NP[minMax.min]]));
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