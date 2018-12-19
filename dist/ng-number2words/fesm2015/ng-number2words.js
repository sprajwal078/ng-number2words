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
class NgNumber2wordsModule {
}
NgNumber2wordsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ToWordsPipe],
                imports: [],
                exports: []
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

export { NgNumber2wordsModule, ToWordsPipe as ɵa };

//# sourceMappingURL=ng-number2words.js.map