import { Pipe, PipeTransform } from '@angular/core';
import { ConverterUtil } from './converterUtil';
import { WORD_MAPPING, WordValues } from './word-mapping';

@Pipe({
  name: 'toWords'
})
export class ToWordsPipe implements PipeTransform {

  transform(value: number | string, language = 'en'): any {
    const converter = new ConverterUtil(
      value,
      WORD_MAPPING.international[language].tenths,
      WORD_MAPPING.international[language].subHundreds,
      (1000 * WordValues.trillion - 1),
      WORD_MAPPING.international[language].decimalWord,
      WORD_MAPPING.international[language].negativeWord,
      WORD_MAPPING.international[language].suffix,
      language === 'es'
    );
    return converter.getWords();
  }

}
