(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-number2words', ['exports', '@angular/core'], factory) :
    (factory((global['ng-number2words'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
                if (words === void 0) {
                    words = [];
                }
                if (ignoreZero === void 0) {
                    ignoreZero = false;
                }
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return))
                            _b.call(_e);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
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
            { type: core.Pipe, args: [{
                        name: 'toWords'
                    },] }
        ];
        return ToWordsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgNumber2wordsModule = /** @class */ (function () {
        function NgNumber2wordsModule() {
        }
        NgNumber2wordsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ToWordsPipe],
                        exports: [ToWordsPipe]
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

    exports.NgNumber2wordsModule = NgNumber2wordsModule;
    exports.ToWordsPipe = ToWordsPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-number2words.umd.js.map