/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ConverterUtil } from './converterUtil';
export class ToWordsPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        /** @type {?} */
        const converter = new ConverterUtil(value);
        return converter.getWords();
    }
}
ToWordsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'toWords'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8td29yZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW51bWJlcjJ3b3Jkcy8iLCJzb3VyY2VzIjpbImxpYi90by13b3Jkcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLaEQsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBRXRCLFNBQVMsQ0FBQyxLQUFzQjs7Y0FDeEIsU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQyxPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUFSRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFNBQVM7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnZlcnRlclV0aWwgfSBmcm9tICcuL2NvbnZlcnRlclV0aWwnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0b1dvcmRzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9Xb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IENvbnZlcnRlclV0aWwodmFsdWUpO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRlci5nZXRXb3JkcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19