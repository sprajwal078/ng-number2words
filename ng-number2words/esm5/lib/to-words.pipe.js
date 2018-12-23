/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ConverterUtil } from './converterUtil';
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
export { ToWordsPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8td29yZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW51bWJlcjJ3b3Jkcy8iLCJzb3VyY2VzIjpbImxpYi90by13b3Jkcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQ7SUFBQTtJQVVBLENBQUM7Ozs7O0lBTEMsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQXNCOztZQUN4QixTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFDLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsU0FBUztpQkFDaEI7O0lBUUQsa0JBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb252ZXJ0ZXJVdGlsIH0gZnJvbSAnLi9jb252ZXJ0ZXJVdGlsJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndG9Xb3JkcydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvV29yZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBDb252ZXJ0ZXJVdGlsKHZhbHVlKTtcclxuICAgIHJldHVybiBjb252ZXJ0ZXIuZ2V0V29yZHMoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==