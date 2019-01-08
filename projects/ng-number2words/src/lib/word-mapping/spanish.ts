export const SUB_HUNDRED_ES: any = {
  0   : 'cero',
  1   : 'uno',
  2   : 'dos',
  3   : 'tres',
  4   : 'cuatro',
  5   : 'cinco',
  6   : 'seis',
  7   : 'siete',
  8   : 'ocho',
  9   : 'nueve',
  10  : 'diez',
  11  : 'once',
  12  : 'doce',
  13  : 'trece',
  14  : 'catorce',
  15  : 'quince',
  16  : 'dieciséis',
  17  : 'diecisiete',
  18  : 'dieciocho',
  19  : 'diecinueve',
  20  : 'veinte',
  21  : 'veintiuno',
  22  : 'veintidós',
  23  : 'veintitrés',
  24  : 'veinticuatro',
  25  : 'veinticinco',
  26  : 'veintiséis',
  27  : 'veintisiete',
  28  : 'veintiocho',
  29  : 'veintinueve',
  30  : 'treinta',
  40  : 'cuarenta',
  50  : 'cincuenta',
  60  : 'sesenta',
  70  : 'setenta',
  80  : 'ochenta',
  90  : 'noventa',
  100 : 'cien',
};

export const TENTH_MAPPING_ES: any = {
  30              : 'treinta y',
  40              : 'cuarenta y',
  50              : 'cincuenta y',
  60              : 'sesenta y',
  70              : 'setenta y',
  80              : 'ochenta y',
  90              : 'noventa y',
  100             : 'ciento',
  200             : 'doscientos',
  300             : 'trescientos',
  400             : 'cuatrocientos',
  500             : 'quinientos',
  600             : 'seiscientos',
  700             : 'setecientos',
  800             : 'ochocientos',
  900             : 'novecientos',
  1000            : 'mil',
  1000000         : 'millón',
  1000000000000   : 'billón'
};

export const TENTH_MAPPING_PLURAL_ES: any = {
  1000000         : 'millones',
  1000000000000   : 'billones'
};

// in spanish language, when the word reaches one million, it is written as un millón
// but in our configuration the word for 1 is uno so the result will be uno millón
// to fix this we need to replace uno with un.. and so on for other words
const REPLACE_MAPPING_ES: any = {
  'uno millón'        : 'un millón',
  'uno mil millones'  : 'un mil millones',
  'uno mil'           : 'mil',
  'uno billón'        : 'un billón',
};
export const EXCEPTION_REPLACER_ES = (word: string) => {
  // the exception parser replacer will check if the word has any exceptional characters
  // if it does then replace the exceptional word with the provided word
  Object.keys(REPLACE_MAPPING_ES).map(key => word = word.replace(key, REPLACE_MAPPING_ES[key]));
  return word;
};

export enum OtherWordsEs {
  minus = 'menos',
  point = 'punto'
}
