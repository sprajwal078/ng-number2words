import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toWords'
})
export class ToWordsPipe implements PipeTransform {

  transform(value: number): any {
    return null;
  }

}
