import { WORD_MAPPING, WordValues } from './word-mapping';

export class ConverterUtil {
  private words: string[] = [];
  value: number | string;
  maxValue: number;
  tenthMapping: any;
  subHundredMapping: any;
  decimalNotation: string;
  negativeNotation: string;

  constructor(
    value: number | string,
    tenthMapping: any = WORD_MAPPING.international.en.tenths,
    subHundredMapping: any = WORD_MAPPING.international.en.subHundreds,
    max: number = (1000 * WordValues.trillion - 1),
    decimalNotation = 'point',
    negativeNotation = 'minus'
  ) {
    if (typeof (value) === 'string') {
      if (isNaN(+value)) {
        console.error(`value not number: ${value} is not a number. Please ensure the value is a number`);
      }
      value = +value;
    }
    if (value > max) {
      console.error(`value not supported: ${value} exceeds the max value`);
    }
    this.value = value;
    if ((this.value || this.value === 0) && value <= max) {
      value = +value;
      this.tenthMapping = tenthMapping;
      this.subHundredMapping = subHundredMapping;
      this.maxValue = max;
      this.decimalNotation = decimalNotation;
      this.negativeNotation = negativeNotation;
      const isNegative = value < 0;
      //  deal with negative number
      if (isNegative) {
        value = Math.abs(value);
        this.words = [this.negativeNotation];
      }
      // deal with decimal number
      let decimalWords: string[] = [];
      const valueAfterPoint = /\.\d+/.exec(value.toString());
      if (valueAfterPoint) {
        decimalWords = this.convertDecimalToWords(valueAfterPoint[0]);
      }
      value = Math.floor(value);
      this.words = [...this.words, ...this.convertToWords(value), ...decimalWords];
    }
  }

  convertToWords(value: number | null): string[] {
    if (value === null || value === undefined) {
      return [];
    }
    // to convert the number to words we first check if the number is below 100
    //  if below 100 then simply use the convertSubHundredToWords() and set wordsValue
    if (value < 100) {
      return this.convertSubHundredToWords(value);
    }
    //  if the value is over 99 we first find the length of the string of the value
    //  eg if the value is 1234513, the length is 7.
    //  then we find which category of the mapping does the current number falls in
    //  eg, when length is 7, the value falls under the 1000000: 'million' category
    // to do this we get the 10 power (length-1), then check if the value exists in the mapping
    const length = value.toString().length;
    let pow10 = 10 ** (length - 1);

    // it is not necessary that the length matches a category
    // eg, when length is 5, the value falls under the 'ten thousand' category
    // but the mapping for ten thousand doesn't exist in the map
    // so we have to keep dividing the power by 10 until we find the appropriate match
    let category = '';
    while (!category) {
      category = this.tenthMapping[pow10] || '';
      if (!category) {
        pow10 /= 10;
      }
    }

    // since we found the category, we will now separate the number by the number of 0 in the pow10
    // eg if value is 12340, pow10 is 1000, so we want to separae 12 and 34o so we can make it 'twelve' 'thousand'
    // we could divide the number by the pow10 but for numbers like 1230, the 0 is lost during the operation
    const numberof0s = /0+/.exec(pow10.toString())[0].length;
    const prefix = value.toString().slice(0, length - numberof0s);
    const suffix = +value.toString().slice(-numberof0s);
    return [...this.convertToWords(+prefix), category, ...this.convertToWords(suffix ? suffix : null)];
  }

  convertSubHundredToWords(value: number): string[] {
    // return the value if it already exists on the subHundredMapping object
    // eg, if subHundredMapping has {1: 'one'} and the value passed is 1
    // we return ['one']
    if (this.subHundredMapping[value]) {
      return [this.subHundredMapping[value]];
    }
    // divide the number by 10 then get the suffix and prefix so we can convert them to words
    // eg, if the value passed is 23, we divide it by 10, so we get 2.3
    // now we can multiply 2 by 10 and map (each 20 and 3) it using the subHundredMapping object
    // so the result is ['twenty', 'three']
    const splitValue = (value / 10).toString().split('.'); // split value will look like ['20', '3']
    return [this.tenthMapping[+splitValue[0] * 10], this.subHundredMapping[splitValue[1]]];
  }

  convertDecimalToWords(decimal: string): string[] {
    const decimalValues = decimal.split('');
    return decimalValues.map(dec => {
      if (dec === '.') {
        return this.decimalNotation;
      }
      return this.subHundredMapping[dec];
    });
  }

  getWords() {
    return this.words.filter(word => !!word).join(' ');
  }
}
