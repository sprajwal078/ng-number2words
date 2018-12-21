import { Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const WordValues = {
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
const SUB_TWENTIES_MAPPING = {
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
const TENTH_MAPPING = {
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
class ToWordsPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const WordValues$1 = {
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
const SUB_TWENTIES_MAPPING$1 = {
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
const TENTH_MAPPING$1 = {
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
const SUB_HUNDRED_NP = [
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
const TENTH_MAPPING_NP = {
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
class ToHinduArabicWordsPipe {
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
    transform(value, language = 'en') {
        if (typeof (value) !== 'number') {
            if (isNaN(+value)) {
                console.error(`value not number: ${value} is not a number. Please ensure the value is a number`);
                return null;
            }
            console.warn(`'${value}' converted to number: for best results, please ensure you provide number instead of string`);
            value = +value;
        }
        /** @type {?} */
        let words = [];
        if (language === 'en') {
            words = this.convertToWord(value);
        }
        else {
            words = this.convertToLanguage(value, language);
        }
        return words.join(' ');
    }
    /**
     * @param {?} number
     * @param {?=} words
     * @param {?=} ignoreZero
     * @param {?=} lang
     * @return {?}
     */
    convertToWord(number, words = [], ignoreZero = false, lang = 'en') {
        if (number > (100 * WordValues$1.kharab)) {
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
            words.push(SUB_TWENTIES_MAPPING$1[number]);
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
                words.push(...prefix, TENTH_MAPPING$1[minMax.min]);
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
        return reminder ? [TENTH_MAPPING$1[number], SUB_TWENTIES_MAPPING$1[reminder]] : [TENTH_MAPPING$1[number]];
    }
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    convertToLanguage(value, lang) {
        switch (lang) {
            case 'np':
                return this.convertToNepali(value);
        }
    }
    /**
     * @param {?} value
     * @param {?=} words
     * @param {?=} ignoreZero
     * @return {?}
     */
    convertToNepali(value, words = [], ignoreZero = false) {
        if (value > (100 * WordValues$1.kharab)) {
            console.error(`value not supported: ${value} exceeds the max value which is 999 trillion`);
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
        for (const minMax of this.ranges) {
            if (value >= minMax.min && value < minMax.max) {
                /** @type {?} */
                const prefix = this.convertToNepali(+Math.floor((value / minMax.min)).toFixed());
                words.push(...prefix, TENTH_MAPPING_NP[minMax.min]);
                return this.convertToNepali(value % minMax.min, words, true);
            }
        }
        return words;
    }
}
ToHinduArabicWordsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'toHinduArabicWords'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgNumber2wordsModule {
}
NgNumber2wordsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ToWordsPipe, ToHinduArabicWordsPipe],
                exports: [ToWordsPipe, ToHinduArabicWordsPipe]
            },] }
];

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