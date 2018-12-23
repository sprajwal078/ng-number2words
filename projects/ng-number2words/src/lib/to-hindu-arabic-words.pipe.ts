import { Pipe, PipeTransform } from '@angular/core';
import { ConverterUtil } from './converterUtil';
import { WORD_MAPPING, WordValues } from './word-mapping';

@Pipe({
  name: 'toHinduArabicWords'
})
export class ToHinduArabicWordsPipe implements PipeTransform {

  transform(value: number | string, language = 'en'): any {
    const converter = new ConverterUtil(
      value,
      WORD_MAPPING.hinduArabic[language].tenths,
      WORD_MAPPING.hinduArabic[language].subHundreds,
      (100 * WordValues.kharab - 1),
      WORD_MAPPING.hinduArabic[language].decimalWord,
      WORD_MAPPING.hinduArabic[language].negativeWord
    );
    return converter.getWords();
  }

}
