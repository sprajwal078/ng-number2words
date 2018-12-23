import { Pipe, PipeTransform } from '@angular/core';
import { ConverterUtil } from './converterUtil';

@Pipe({
  name: 'toWords'
})
export class ToWordsPipe implements PipeTransform {

  transform(value: number | string): any {
    const converter = new ConverterUtil(value);
    return converter.getWords();
  }

}
