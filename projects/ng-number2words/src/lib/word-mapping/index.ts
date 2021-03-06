import { TENTH_MAPPING_EN, SUB_TWENTIES_MAPPING_EN, HINDU_ARABIC_TENTH_MAPPING_EN } from './english';
import { TENTH_MAPPING_NP, SUB_HUNDRED_NP, OtherWordsNp } from './nepali';
import {
  TENTH_MAPPING_ES,
  SUB_HUNDRED_ES,
  OtherWordsEs,
  TENTH_MAPPING_PLURAL_ES,
  EXCEPTION_REPLACER_ES,
} from './spanish';

export const WORD_MAPPING = {
  international: {
    en: {
      tenths: TENTH_MAPPING_EN,
      subHundreds: SUB_TWENTIES_MAPPING_EN,
      negativeWord: 'minus',
      decimalWord: 'point',
    },
    es: {
      tenths: TENTH_MAPPING_ES,
      tenthsPlural: TENTH_MAPPING_PLURAL_ES,
      subHundreds: SUB_HUNDRED_ES,
      negativeWord: OtherWordsEs.minus,
      decimalWord: OtherWordsEs.point,
      exceptionReplacer: EXCEPTION_REPLACER_ES,
      skipPrefixMaxValue: 1000
    }
  },
  hinduArabic: {
    en: {
      tenths: HINDU_ARABIC_TENTH_MAPPING_EN,
      subHundreds: SUB_TWENTIES_MAPPING_EN,
      negativeWord: 'minus',
      decimalWord: 'point'
    },
    np: {
      tenths: TENTH_MAPPING_NP,
      subHundreds: SUB_HUNDRED_NP,
      negativeWord: OtherWordsNp.minus,
      decimalWord: OtherWordsNp.point
    }
  }
};

export enum WordValues {
  hundred = 100,
  thousand = 1000,
  million = 1000000,
  billion = 1000000000,
  trillion = 1000000000000,

  // hindu arabic
  lakh = 100000,
  crore = 10000000,
  arab = 1000000000,
  kharab = 100000000000,
}
