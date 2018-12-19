import { Pipe, PipeTransform } from '@angular/core';
import { WordValues, SUB_TWENTIES_MAPPING, TENTH_MAPPING } from './hindu-arabic-word-map';
import { MinMax } from './types';

@Pipe({
  name: 'toHinduArabicWords'
})
export class ToHinduArabicWordsPipe implements PipeTransform {

  subHundredRanges: MinMax[] = [
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
  ranges: MinMax[] = [
    {
      min: WordValues.hundred,
      max: WordValues.thousand
    },
    {
      min: WordValues.thousand,
      max: WordValues.lakh
    },
    {
      min: WordValues.lakh,
      max: WordValues.crore
    },
    {
      min: WordValues.crore,
      max: WordValues.arab
    },
    {
      min: WordValues.arab,
      max: WordValues.kharab
    },
    {
      min: WordValues.kharab,
      max: 100 * WordValues.kharab
    },
  ];

  transform(value: any): any {
    if (typeof (value) !== 'number') {
      if (isNaN(+value)) {
        console.error(`value not number: ${value} is not a number. Please ensure the value is a number`);
        return null;
      }
      console.warn(
        `'${value}' converted to number: for best results, please ensure you provide number instead of string`
      );
      value = +value;
    }
    const words = this.convertToWord(value);
    return words.join(' ');
  }

  convertToWord(number, words = [], ignoreZero = false) {
    if (number > (100 * WordValues.kharab)) {
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
        const prefix = this.convertToWord(+Math.floor((number / minMax.min)).toFixed());
        words.push(...prefix, TENTH_MAPPING[minMax.min]);
        return this.convertToWord(number % minMax.min, words, true);
      }
    }
    return words;
  }

  convertReminderToWord(value, number) {
    const reminder = value % number;
    return reminder ? [TENTH_MAPPING[number], SUB_TWENTIES_MAPPING[reminder]] : [TENTH_MAPPING[number]];
  }

}
