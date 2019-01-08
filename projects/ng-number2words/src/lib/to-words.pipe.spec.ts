import { ToWordsPipe } from './to-words.pipe';
import { TENTH_MAPPING_ES, SUB_HUNDRED_ES } from './word-mapping/spanish';

describe('ToWordsPipe', () => {
  const pipe = new ToWordsPipe();
  it('pipe should exist', () => {
    expect(pipe).toBeTruthy();
  });

  describe('falsy values', () => {
    it('null should be empty', () => {
      expect(pipe.transform(null)).toBe('');
    });

    it('undefined should be empty', () => {
      expect(pipe.transform(undefined)).toBe('');
    });

    it('\'\' should be empty', () => {
      expect(pipe.transform('')).toBe('');
    });

    it('0 should be zero', () => {
      expect(pipe.transform(0)).toBe('zero');
    });
  });

  describe('sub 20s', () => {

    it('1 should be one', () => {
      expect(pipe.transform(1)).toBe('one');
    });
    it('2 should be two', () => {
      expect(pipe.transform(2)).toBe('two');
    });
    it('3 should be three', () => {
      expect(pipe.transform(3)).toBe('three');
    });
    it('4 should be four', () => {
      expect(pipe.transform(4)).toBe('four');
    });
    it('5 should be five', () => {
      expect(pipe.transform(5)).toBe('five');
    });
    it('6 should be six', () => {
      expect(pipe.transform(6)).toBe('six');
    });
    it('7 should be seven', () => {
      expect(pipe.transform(7)).toBe('seven');
    });
    it('8 should be eight', () => {
      expect(pipe.transform(8)).toBe('eight');
    });
    it('9 should be nine', () => {
      expect(pipe.transform(9)).toBe('nine');
    });
    it('10 should be ten', () => {
      expect(pipe.transform(10)).toBe('ten');
    });
    it('11 should be eleven', () => {
      expect(pipe.transform(11)).toBe('eleven');
    });
    it('12 should be twelve', () => {
      expect(pipe.transform(12)).toBe('twelve');
    });
    it('13 should be thirteen', () => {
      expect(pipe.transform(13)).toBe('thirteen');
    });
    it('14 should be fourteen', () => {
      expect(pipe.transform(14)).toBe('fourteen');
    });
    it('15 should be fifteen', () => {
      expect(pipe.transform(15)).toBe('fifteen');
    });
    it('16 should be sixteen', () => {
      expect(pipe.transform(16)).toBe('sixteen');
    });
    it('17 should be seventeen', () => {
      expect(pipe.transform(17)).toBe('seventeen');
    });
    it('18 should be eighteen', () => {
      expect(pipe.transform(18)).toBe('eighteen');
    });
    it('19 should be nineteen', () => {
      expect(pipe.transform(19)).toBe('nineteen');
    });
  });

  describe('negative number', () => {
    it('-13 should be minus thirteen', () => {
      expect(pipe.transform(-13)).toBe('minus thirteen');
    });
  });

  describe('tenths', () => {
    it('10 should be ten', () => {
      expect(pipe.transform(10)).toBe('ten');
    });
    it('20 should be twenty', () => {
      expect(pipe.transform(20)).toBe('twenty');
    });
    it('30 should be thirty', () => {
      expect(pipe.transform(30)).toBe('thirty');
    });
    it('40 should be forty', () => {
      expect(pipe.transform(40)).toBe('forty');
    });
    it('50 should be fifty', () => {
      expect(pipe.transform(50)).toBe('fifty');
    });
    it('60 should be sixty', () => {
      expect(pipe.transform(60)).toBe('sixty');
    });
    it('70 should be seventy', () => {
      expect(pipe.transform(70)).toBe('seventy');
    });
    it('80 should be eighty', () => {
      expect(pipe.transform(80)).toBe('eighty');
    });
    it('90 should be ninety', () => {
      expect(pipe.transform(90)).toBe('ninety');
    });
    it('100 should be one hundred', () => {
      expect(pipe.transform(100)).toBe('one hundred');
    });
    it('1000 should be one thousand', () => {
      expect(pipe.transform(1000)).toBe('one thousand');
    });
    it('10000 should be ten thousand', () => {
      expect(pipe.transform(10000)).toBe('ten thousand');
    });
    it('100000 should be one hundred thousand', () => {
      expect(pipe.transform(100000)).toBe('one hundred thousand');
    });
    it('1000000 should be one million', () => {
      expect(pipe.transform(1000000)).toBe('one million');
    });
    it('10000000 should be ten million', () => {
      expect(pipe.transform(10000000)).toBe('ten million');
    });
    it('100000000 should be one hundred million', () => {
      expect(pipe.transform(100000000)).toBe('one hundred million');
    });
    it('1000000000 should be one billion', () => {
      expect(pipe.transform(1000000000)).toBe('one billion');
    });
    it('10000000000 should be ten billion', () => {
      expect(pipe.transform(10000000000)).toBe('ten billion');
    });
    it('100000000000 should be one hundred billion', () => {
      expect(pipe.transform(100000000000)).toBe('one hundred billion');
    });
    it('1000000000000 should be one trillion', () => {
      expect(pipe.transform(1000000000000)).toBe('one trillion');
    });
    it('10000000000000 should be ten trillion', () => {
      expect(pipe.transform(10000000000000)).toBe('ten trillion');
    });
    it('100000000000000 should be one hundred trillion', () => {
      expect(pipe.transform(100000000000000)).toBe('one hundred trillion');
    });
    it('1000000000000000 should be empty', () => {
      expect(pipe.transform(1000000000000000)).toBe('');
    });
  });


  describe('100 to 999', () => {
    it('123 should be one hundred twenty three', () => {
      expect(pipe.transform(123)).toBe('one hundred twenty three');
    });
    it('257 should be two hundred fifty seven', () => {
      expect(pipe.transform(257)).toBe('two hundred fifty seven');
    });
    it('382 should be three hundred eighty two', () => {
      expect(pipe.transform(382)).toBe('three hundred eighty two');
    });
    it('495 should be four hundred ninety five', () => {
      expect(pipe.transform(495)).toBe('four hundred ninety five');
    });
    it('572 should be five hundred seventy two', () => {
      expect(pipe.transform(572)).toBe('five hundred seventy two');
    });
    it('690 should be six hundred ninety', () => {
      expect(pipe.transform(690)).toBe('six hundred ninety');
    });
    it('765 should be seven hundred sixty five', () => {
      expect(pipe.transform(765)).toBe('seven hundred sixty five');
    });
    it('878 should be eight hundred seventy eight', () => {
      expect(pipe.transform(878)).toBe('eight hundred seventy eight');
    });
    it('999 should be nine hundred ninety nine', () => {
      expect(pipe.transform(999)).toBe('nine hundred ninety nine');
    });
  });

  describe('thousand to million', () => {
    it('1243 should be one thousand two hundred forty three', () => {
      expect(pipe.transform(1243)).toBe('one thousand two hundred forty three');
    });

    it('3756 should be three thousand seven hundred fifty six', () => {
      expect(pipe.transform(3756)).toBe('three thousand seven hundred fifty six');
    });

    it('57432 should be fifty seven thousand four hundred thirty two', () => {
      expect(pipe.transform(57432)).toBe('fifty seven thousand four hundred thirty two');
    });

    it('987654 should be nine hundred eighty seven thousand six hundred fifty four', () => {
      expect(pipe.transform(987654))
        .toBe('nine hundred eighty seven thousand six hundred fifty four');
    });
  });

  describe('million to billion', () => {
    it('1000003 should be one million three', () => {
      expect(pipe.transform(1000003)).toBe('one million three');
    });

    it('13800264 should be thirteen million eight hundred thousand two hundred sixty four', () => {
      expect(pipe.transform(13800264))
        .toBe('thirteen million eight hundred thousand two hundred sixty four');
    });

    it(
      '999999999 should be nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine',
      () => {
        expect(pipe.transform(999999999))
          .toBe('nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
      });
  });

  describe('billion to trillion', () => {
    const word1 = 'one billion two hundred thirty four million five hundred sixty seven thousand eighty nine';
    it(`1234567089 should be ${word1}`, () => {
      expect(pipe.transform(1234567089)).toBe(word1);
    });

    const word2 = 'fourteen billion six hundred million seven hundred twenty eight thousand one hundred ninety five';
    it(`14600728195 should be ${word2}`, () => {
      expect(pipe.transform(14600728195)).toBe(word2);
    });

    const word3 = `nine hundred ninety nine billion
                   nine hundred ninety nine million
                   nine hundred ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(`999999999999 should be ${word3}`, () => {
      expect(pipe.transform(999999999999)).toBe(word3);
    });
  });

  describe('trillion to 999 trillion', () => {
    const word1 = `seven trillion
                   eight hundred five billion
                   two hundred sixty three million
                   seven hundred sixty five thousand
                   four hundred thirty two`.replace(/\s+/g, ' ');
    it(`7805263765432 should be ${word1}`, () => {
      expect(pipe.transform(7805263765432)).toBe(word1);
    });

    const word2 = `seventeen trillion
                   two hundred sixty five billion
                   two hundred sixty three million
                   seven hundred sixty five thousand
                   four hundred thirty two`.replace(/\s+/g, ' ');
    it(`17265263765432 should be ${word2}`, () => {
      expect(pipe.transform(17265263765432)).toBe(word2);
    });

    const word3 = `nine hundred seventeen trillion
                   two hundred sixty five billion
                   two hundred sixty three million
                   seven hundred sixty five thousand
                   four hundred thirty two`.replace(/\s+/g, ' ');
    it(`917265263765432 should be ${word3}`, () => {
      expect(pipe.transform(917265263765432)).toBe(word3);
    });

    it(`1917265263765432 is greater than 999 trillion, it should be empty`, () => {
      expect(pipe.transform(1917265263765432)).toBe('');
    });
  });

  describe('decimal inputs', () => {
    it('should output one point one two three', () => {
      expect(pipe.transform(1.123)).toBe('one point one two three');
    });

    it('should output two point four five six', () => {
      expect(pipe.transform(2.456)).toBe('two point four five six');
    });

    it('should output five point zero nine eight seven', () => {
      expect(pipe.transform(5.0987)).toBe('five point zero nine eight seven');
    });
  });

  describe('language support', () => {
    describe('spanish', () => {
      describe('sub 30s', () => {
        it('0 should be cero', () => {
          expect(pipe.transform(0, 'es')).toBe('cero');
        });
        it('1 should be uno', () => {
          expect(pipe.transform(1, 'es')).toBe('uno');
        });
        it('2 should be dos', () => {
          expect(pipe.transform(2, 'es')).toBe('dos');
        });
        it('3 should be tres', () => {
          expect(pipe.transform(3, 'es')).toBe('tres');
        });
        it('4 should be cuatro', () => {
          expect(pipe.transform(4, 'es')).toBe('cuatro');
        });
        it('5 should be cinco', () => {
          expect(pipe.transform(5, 'es')).toBe('cinco');
        });
        it('6 should be seis', () => {
          expect(pipe.transform(6, 'es')).toBe('seis');
        });
        it('7 should be siete', () => {
          expect(pipe.transform(7, 'es')).toBe('siete');
        });
        it('8 should be ocho', () => {
          expect(pipe.transform(8, 'es')).toBe('ocho');
        });
        it('9 should be nueve', () => {
          expect(pipe.transform(9, 'es')).toBe('nueve');
        });
        it('10 should be diez', () => {
          expect(pipe.transform(10, 'es')).toBe('diez');
        });
        it('11 should be once', () => {
          expect(pipe.transform(11, 'es')).toBe('once');
        });
        it('12 should be doce', () => {
          expect(pipe.transform(12, 'es')).toBe('doce');
        });
        it('13 should be trece', () => {
          expect(pipe.transform(13, 'es')).toBe('trece');
        });
        it('14 should be catorce', () => {
          expect(pipe.transform(14, 'es')).toBe('catorce');
        });
        it('15 should be quince', () => {
          expect(pipe.transform(15, 'es')).toBe('quince');
        });
        it('16 should be dieciséis', () => {
          expect(pipe.transform(16, 'es')).toBe('dieciséis');
        });
        it('17 should be diecisiete', () => {
          expect(pipe.transform(17, 'es')).toBe('diecisiete');
        });
        it('18 should be dieciocho', () => {
          expect(pipe.transform(18, 'es')).toBe('dieciocho');
        });
        it('19 should be diecinueve', () => {
          expect(pipe.transform(19, 'es')).toBe('diecinueve');
        });
        it('20 should be veinte', () => {
          expect(pipe.transform(20, 'es')).toBe('veinte');
        });
        it('21 should be veintiuno', () => {
          expect(pipe.transform(21, 'es')).toBe('veintiuno');
        });
        it('22 should be veintidós', () => {
          expect(pipe.transform(22, 'es')).toBe('veintidós');
        });
        it('23 should be veintitrés', () => {
          expect(pipe.transform(23, 'es')).toBe('veintitrés');
        });
        it('24 should be veinticuatro', () => {
          expect(pipe.transform(24, 'es')).toBe('veinticuatro');
        });
        it('25 should be veinticinco', () => {
          expect(pipe.transform(25, 'es')).toBe('veinticinco');
        });
        it('26 should be veintiséis', () => {
          expect(pipe.transform(26, 'es')).toBe('veintiséis');
        });
        it('27 should be veintisiete', () => {
          expect(pipe.transform(27, 'es')).toBe('veintisiete');
        });
        it('28 should be veintiocho', () => {
          expect(pipe.transform(28, 'es')).toBe('veintiocho');
        });
        it('29 should be veintinueve', () => {
          expect(pipe.transform(29, 'es')).toBe('veintinueve');
        });
      });

      describe('negative number', () => {
        it('-13 should be menos trece', () => {
          expect(pipe.transform(-13, 'es')).toBe('menos trece');
        });
      });

      describe('30 to 39', () => {
        it('30 should be treinta', () => {
          expect(pipe.transform(30, 'es')).toBe('treinta');
        });
        it('31 should be treinta y uno', () => {
          expect(pipe.transform(31, 'es')).toBe('treinta y uno');
        });
        it('32 should be treinta y dos', () => {
          expect(pipe.transform(32, 'es')).toBe('treinta y dos');
        });
        it('33 should be treinta y tres', () => {
          expect(pipe.transform(33, 'es')).toBe('treinta y tres');
        });
        it('34 should be treinta y cuatro', () => {
          expect(pipe.transform(34, 'es')).toBe('treinta y cuatro');
        });
        it('35 should be treinta y cinco', () => {
          expect(pipe.transform(35, 'es')).toBe('treinta y cinco');
        });
        it('36 should be treinta y seis', () => {
          expect(pipe.transform(36, 'es')).toBe('treinta y seis');
        });
        it('37 should be treinta y siete', () => {
          expect(pipe.transform(37, 'es')).toBe('treinta y siete');
        });
        it('38 should be treinta y ocho', () => {
          expect(pipe.transform(38, 'es')).toBe('treinta y ocho');
        });
        it('39 should be treinta y nueve', () => {
          expect(pipe.transform(39, 'es')).toBe('treinta y nueve');
        });
      });

      describe('40 to 49', () => {
        it('40 should be cuarenta', () => {
          expect(pipe.transform(40, 'es')).toBe('cuarenta');
        });
        it('41 should be cuarenta y uno', () => {
          expect(pipe.transform(41, 'es')).toBe('cuarenta y uno');
        });
        it('42 should be cuarenta y dos', () => {
          expect(pipe.transform(42, 'es')).toBe('cuarenta y dos');
        });
        it('43 should be cuarenta y tres', () => {
          expect(pipe.transform(43, 'es')).toBe('cuarenta y tres');
        });
        it('44 should be cuarenta y cuatro', () => {
          expect(pipe.transform(44, 'es')).toBe('cuarenta y cuatro');
        });
        it('45 should be cuarenta y cinco', () => {
          expect(pipe.transform(45, 'es')).toBe('cuarenta y cinco');
        });
        it('46 should be cuarenta y seis', () => {
          expect(pipe.transform(46, 'es')).toBe('cuarenta y seis');
        });
        it('47 should be cuarenta y siete', () => {
          expect(pipe.transform(47, 'es')).toBe('cuarenta y siete');
        });
        it('48 should be cuarenta y ocho', () => {
          expect(pipe.transform(48, 'es')).toBe('cuarenta y ocho');
        });
        it('49 should be cuarenta y nueve', () => {
          expect(pipe.transform(49, 'es')).toBe('cuarenta y nueve');
        });
      });

      describe('50 to 59', () => {
        it('50 should be cincuenta', () => {
          expect(pipe.transform(50, 'es')).toBe('cincuenta');
        });
        it('51 should be cincuenta y uno', () => {
          expect(pipe.transform(51, 'es')).toBe('cincuenta y uno');
        });
        it('52 should be cincuenta y dos', () => {
          expect(pipe.transform(52, 'es')).toBe('cincuenta y dos');
        });
        it('53 should be cincuenta y tres', () => {
          expect(pipe.transform(53, 'es')).toBe('cincuenta y tres');
        });
        it('54 should be cincuenta y cuatro', () => {
          expect(pipe.transform(54, 'es')).toBe('cincuenta y cuatro');
        });
        it('55 should be cincuenta y cinco', () => {
          expect(pipe.transform(55, 'es')).toBe('cincuenta y cinco');
        });
        it('56 should be cincuenta y seis', () => {
          expect(pipe.transform(56, 'es')).toBe('cincuenta y seis');
        });
        it('57 should be cincuenta y siete', () => {
          expect(pipe.transform(57, 'es')).toBe('cincuenta y siete');
        });
        it('58 should be cincuenta y ocho', () => {
          expect(pipe.transform(58, 'es')).toBe('cincuenta y ocho');
        });
        it('59 should be cincuenta y nueve', () => {
          expect(pipe.transform(59, 'es')).toBe('cincuenta y nueve');
        });
      });

      describe('60 to 69', () => {
        it('60 should be sesenta', () => {
          expect(pipe.transform(60, 'es')).toBe('sesenta');
        });
        it('61 should be sesenta y uno', () => {
          expect(pipe.transform(61, 'es')).toBe('sesenta y uno');
        });
        it('62 should be sesenta y dos', () => {
          expect(pipe.transform(62, 'es')).toBe('sesenta y dos');
        });
        it('63 should be sesenta y tres', () => {
          expect(pipe.transform(63, 'es')).toBe('sesenta y tres');
        });
        it('64 should be sesenta y cuatro', () => {
          expect(pipe.transform(64, 'es')).toBe('sesenta y cuatro');
        });
        it('65 should be sesenta y cinco', () => {
          expect(pipe.transform(65, 'es')).toBe('sesenta y cinco');
        });
        it('66 should be sesenta y seis', () => {
          expect(pipe.transform(66, 'es')).toBe('sesenta y seis');
        });
        it('67 should be sesenta y siete', () => {
          expect(pipe.transform(67, 'es')).toBe('sesenta y siete');
        });
        it('68 should be sesenta y ocho', () => {
          expect(pipe.transform(68, 'es')).toBe('sesenta y ocho');
        });
        it('69 should be sesenta y nueve', () => {
          expect(pipe.transform(69, 'es')).toBe('sesenta y nueve');
        });
      });

      describe('70 to 79', () => {
        it('70 should be setenta', () => {
          expect(pipe.transform(70, 'es')).toBe('setenta');
        });
        it('71 should be setenta y uno', () => {
          expect(pipe.transform(71, 'es')).toBe('setenta y uno');
        });
        it('72 should be setenta y dos', () => {
          expect(pipe.transform(72, 'es')).toBe('setenta y dos');
        });
        it('73 should be setenta y tres', () => {
          expect(pipe.transform(73, 'es')).toBe('setenta y tres');
        });
        it('74 should be setenta y cuatro', () => {
          expect(pipe.transform(74, 'es')).toBe('setenta y cuatro');
        });
        it('75 should be setenta y cinco', () => {
          expect(pipe.transform(75, 'es')).toBe('setenta y cinco');
        });
        it('76 should be setenta y seis', () => {
          expect(pipe.transform(76, 'es')).toBe('setenta y seis');
        });
        it('77 should be setenta y siete', () => {
          expect(pipe.transform(77, 'es')).toBe('setenta y siete');
        });
        it('78 should be setenta y ocho', () => {
          expect(pipe.transform(78, 'es')).toBe('setenta y ocho');
        });
        it('79 should be setenta y nueve', () => {
          expect(pipe.transform(79, 'es')).toBe('setenta y nueve');
        });
      });

      describe('80 to 89', () => {
        it('80 should be ochenta', () => {
          expect(pipe.transform(80, 'es')).toBe('ochenta');
        });
        it('81 should be ochenta y uno', () => {
          expect(pipe.transform(81, 'es')).toBe('ochenta y uno');
        });
        it('82 should be ochenta y dos', () => {
          expect(pipe.transform(82, 'es')).toBe('ochenta y dos');
        });
        it('83 should be ochenta y tres', () => {
          expect(pipe.transform(83, 'es')).toBe('ochenta y tres');
        });
        it('84 should be ochenta y cuatro', () => {
          expect(pipe.transform(84, 'es')).toBe('ochenta y cuatro');
        });
        it('85 should be ochenta y cinco', () => {
          expect(pipe.transform(85, 'es')).toBe('ochenta y cinco');
        });
        it('86 should be ochenta y seis', () => {
          expect(pipe.transform(86, 'es')).toBe('ochenta y seis');
        });
        it('87 should be ochenta y siete', () => {
          expect(pipe.transform(87, 'es')).toBe('ochenta y siete');
        });
        it('88 should be ochenta y ocho', () => {
          expect(pipe.transform(88, 'es')).toBe('ochenta y ocho');
        });
        it('89 should be ochenta y nueve', () => {
          expect(pipe.transform(89, 'es')).toBe('ochenta y nueve');
        });
      });

      describe('90 to 99', () => {
        it('90 should be noventa', () => {
          expect(pipe.transform(90, 'es')).toBe('noventa');
        });
        it('91 should be noventa y uno', () => {
          expect(pipe.transform(91, 'es')).toBe('noventa y uno');
        });
        it('92 should be noventa y dos', () => {
          expect(pipe.transform(92, 'es')).toBe('noventa y dos');
        });
        it('93 should be noventa y tres', () => {
          expect(pipe.transform(93, 'es')).toBe('noventa y tres');
        });
        it('94 should be noventa y cuatro', () => {
          expect(pipe.transform(94, 'es')).toBe('noventa y cuatro');
        });
        it('95 should be noventa y cinco', () => {
          expect(pipe.transform(95, 'es')).toBe('noventa y cinco');
        });
        it('96 should be noventa y seis', () => {
          expect(pipe.transform(96, 'es')).toBe('noventa y seis');
        });
        it('97 should be noventa y siete', () => {
          expect(pipe.transform(97, 'es')).toBe('noventa y siete');
        });
        it('98 should be noventa y ocho', () => {
          expect(pipe.transform(98, 'es')).toBe('noventa y ocho');
        });
        it('99 should be noventa y nueve', () => {
          expect(pipe.transform(99, 'es')).toBe('noventa y nueve');
        });
      });

      describe('tenths', () => {
        it('100 should be cien', () => {
          expect(pipe.transform(100, 'es')).toBe('cien');
        });
        it('200 should be doscientos', () => {
          expect(pipe.transform(200, 'es')).toBe('doscientos');
        });
        it('300 should be trescientos', () => {
          expect(pipe.transform(300, 'es')).toBe('trescientos');
        });
        it('400 should be cuatrocientos', () => {
          expect(pipe.transform(400, 'es')).toBe('cuatrocientos');
        });
        it('500 should be quinientos', () => {
          expect(pipe.transform(500, 'es')).toBe('quinientos');
        });
        it('600 should be seiscientos', () => {
          expect(pipe.transform(600, 'es')).toBe('seiscientos');
        });
        it('700 should be setecientos', () => {
          expect(pipe.transform(700, 'es')).toBe('setecientos');
        });
        it('800 should be ochocientos', () => {
          expect(pipe.transform(800, 'es')).toBe('ochocientos');
        });
        it('900 should be novecientos', () => {
          expect(pipe.transform(900, 'es')).toBe('novecientos');
        });
        it('1000 should be mil', () => {
          expect(pipe.transform(1000, 'es')).toBe('mil');
        });
        it(`2000 should be ${SUB_HUNDRED_ES[2]} mil`, () => {
          expect(pipe.transform(2000, 'es')).toBe(`${SUB_HUNDRED_ES[2]} mil`);
        });
        it(`3000 should be ${SUB_HUNDRED_ES[3]} mil`, () => {
          expect(pipe.transform(3000, 'es')).toBe(`${SUB_HUNDRED_ES[3]} mil`);
        });
        it(`4000 should be ${SUB_HUNDRED_ES[4]} mil`, () => {
          expect(pipe.transform(4000, 'es')).toBe(`${SUB_HUNDRED_ES[4]} mil`);
        });
        it(`5000 should be ${SUB_HUNDRED_ES[5]} mil`, () => {
          expect(pipe.transform(5000, 'es')).toBe(`${SUB_HUNDRED_ES[5]} mil`);
        });
        it(`6000 should be ${SUB_HUNDRED_ES[6]} mil`, () => {
          expect(pipe.transform(6000, 'es')).toBe(`${SUB_HUNDRED_ES[6]} mil`);
        });
        it(`7000 should be ${SUB_HUNDRED_ES[7]} mil`, () => {
          expect(pipe.transform(7000, 'es')).toBe(`${SUB_HUNDRED_ES[7]} mil`);
        });
        it(`8000 should be ${SUB_HUNDRED_ES[8]} mil`, () => {
          expect(pipe.transform(8000, 'es')).toBe(`${SUB_HUNDRED_ES[8]} mil`);
        });
        it(`9000 should be ${SUB_HUNDRED_ES[9]} mil`, () => {
          expect(pipe.transform(9000, 'es')).toBe(`${SUB_HUNDRED_ES[9]} mil`);
        });
        it(`10000 should be ${SUB_HUNDRED_ES[10]} mil`, () => {
          expect(pipe.transform(10000, 'es')).toBe(`${SUB_HUNDRED_ES[10]} mil`);
        });
        it(`100000 should be cien mil`, () => {
          expect(pipe.transform(100000, 'es')).toBe(`cien mil`);
        });
        it(`1000000 should be un millón`, () => {
          expect(pipe.transform(1000000, 'es')).toBe(`un millón`);
        });
        it(`10000000 should be diez millones`, () => {
          expect(pipe.transform(10000000, 'es')).toBe(`diez millones`);
        });
        it(`100000000 should be cien millones`, () => {
          expect(pipe.transform(100000000, 'es')).toBe(`cien millones`);
        });
        it(`1000000000 should be un mil millones`, () => {
          expect(pipe.transform(1000000000, 'es')).toBe(`un mil millones`);
        });
        it(`10000000000 should be diez mil millones`, () => {
          expect(pipe.transform(10000000000, 'es')).toBe(`diez mil millones`);
        });
        it(`100000000000 should be cien mil millones`, () => {
          expect(pipe.transform(100000000000, 'es')).toBe(`cien mil millones`);
        });
        it(`1000000000000 should be un billón`, () => {
          expect(pipe.transform(1000000000000, 'es')).toBe(`un billón`);
        });
        it(`10000000000000 should be diez billones`, () => {
          expect(pipe.transform(10000000000000, 'es')).toBe(`diez billones`);
        });
        it(`100000000000000 should be cien billones`, () => {
          expect(pipe.transform(100000000000000, 'es')).toBe(`cien billones`);
        });
        it(`1000000000000000 should be empty`, () => {
          expect(pipe.transform(1000000000000000, 'es')).toBe('');
        });
      });

      describe('100 to 199', () => {
        it('105 should be ciento cinco', () => {
          expect(pipe.transform(105, 'es')).toBe('ciento cinco');
        });

        it('129 should be ciento veintinueve', () => {
          expect(pipe.transform(129, 'es')).toBe('ciento veintinueve');
        });

        it('132 should be ciento treinta y dos', () => {
          expect(pipe.transform(132, 'es')).toBe('ciento treinta y dos');
        });

        it('145 should be ciento cuarenta y cinco', () => {
          expect(pipe.transform(145, 'es')).toBe('ciento cuarenta y cinco');
        });

        it('158 should be ciento cincuenta y ocho', () => {
          expect(pipe.transform(158, 'es')).toBe('ciento cincuenta y ocho');
        });

        it('160 should be ciento sesenta', () => {
          expect(pipe.transform(160, 'es')).toBe('ciento sesenta');
        });

        it('173 should be ciento setenta y tres', () => {
          expect(pipe.transform(173, 'es')).toBe('ciento setenta y tres');
        });

        it('187 should be ciento ochenta y siete', () => {
          expect(pipe.transform(187, 'es')).toBe('ciento ochenta y siete');
        });

        it('195 should be ciento noventa y cinco', () => {
          expect(pipe.transform(195, 'es')).toBe('ciento noventa y cinco');
        });
      });

      describe('200 to 299', () => {
        it('202 should be doscientos dos', () => {
          expect(pipe.transform(202, 'es')).toBe('doscientos dos');
        });

        it('221 should be doscientos veintiuno', () => {
          expect(pipe.transform(221, 'es')).toBe('doscientos veintiuno');
        });

        it('238 should be doscientos treinta y ocho', () => {
          expect(pipe.transform(238, 'es')).toBe('doscientos treinta y ocho');
        });

        it('245 should be doscientos cuarenta y cinco', () => {
          expect(pipe.transform(245, 'es')).toBe('doscientos cuarenta y cinco');
        });

        it('258 should be doscientos cincuenta y ocho', () => {
          expect(pipe.transform(258, 'es')).toBe('doscientos cincuenta y ocho');
        });

        it('260 should be doscientos sesenta', () => {
          expect(pipe.transform(260, 'es')).toBe('doscientos sesenta');
        });

        it('273 should be doscientos setenta y tres', () => {
          expect(pipe.transform(273, 'es')).toBe('doscientos setenta y tres');
        });

        it('287 should be doscientos ochenta y siete', () => {
          expect(pipe.transform(287, 'es')).toBe('doscientos ochenta y siete');
        });

        it('295 should be doscientos noventa y cinco', () => {
          expect(pipe.transform(295, 'es')).toBe('doscientos noventa y cinco');
        });
      });

      describe('300 to 399', () => {
        it('302 should be trescientos dos', () => {
          expect(pipe.transform(302, 'es')).toBe('trescientos dos');
        });

        it('321 should be trescientos veintiuno', () => {
          expect(pipe.transform(321, 'es')).toBe('trescientos veintiuno');
        });

        it('338 should be trescientos treinta y ocho', () => {
          expect(pipe.transform(338, 'es')).toBe('trescientos treinta y ocho');
        });

        it('345 should be trescientos cuarenta y cinco', () => {
          expect(pipe.transform(345, 'es')).toBe('trescientos cuarenta y cinco');
        });

        it('358 should be trescientos cincuenta y ocho', () => {
          expect(pipe.transform(358, 'es')).toBe('trescientos cincuenta y ocho');
        });

        it('360 should be trescientos sesenta', () => {
          expect(pipe.transform(360, 'es')).toBe('trescientos sesenta');
        });

        it('373 should be trescientos setenta y tres', () => {
          expect(pipe.transform(373, 'es')).toBe('trescientos setenta y tres');
        });

        it('387 should be trescientos ochenta y siete', () => {
          expect(pipe.transform(387, 'es')).toBe('trescientos ochenta y siete');
        });

        it('395 should be trescientos noventa y cinco', () => {
          expect(pipe.transform(395, 'es')).toBe('trescientos noventa y cinco');
        });
      });

      describe('400 to 499', () => {
        it('402 should be cuatrocientos dos', () => {
          expect(pipe.transform(402, 'es')).toBe('cuatrocientos dos');
        });

        it('421 should be cuatrocientos veintiuno', () => {
          expect(pipe.transform(421, 'es')).toBe('cuatrocientos veintiuno');
        });

        it('438 should be cuatrocientos treinta y ocho', () => {
          expect(pipe.transform(438, 'es')).toBe('cuatrocientos treinta y ocho');
        });

        it('445 should be cuatrocientos cuarenta y cinco', () => {
          expect(pipe.transform(445, 'es')).toBe('cuatrocientos cuarenta y cinco');
        });

        it('458 should be cuatrocientos cincuenta y ocho', () => {
          expect(pipe.transform(458, 'es')).toBe('cuatrocientos cincuenta y ocho');
        });

        it('460 should be cuatrocientos sesenta', () => {
          expect(pipe.transform(460, 'es')).toBe('cuatrocientos sesenta');
        });

        it('473 should be cuatrocientos setenta y tres', () => {
          expect(pipe.transform(473, 'es')).toBe('cuatrocientos setenta y tres');
        });

        it('487 should be cuatrocientos ochenta y siete', () => {
          expect(pipe.transform(487, 'es')).toBe('cuatrocientos ochenta y siete');
        });

        it('495 should be cuatrocientos noventa y cinco', () => {
          expect(pipe.transform(495, 'es')).toBe('cuatrocientos noventa y cinco');
        });
      });

      describe('500 to 599', () => {
        it('502 should be quinientos dos', () => {
          expect(pipe.transform(502, 'es')).toBe('quinientos dos');
        });

        it('521 should be quinientos veintiuno', () => {
          expect(pipe.transform(521, 'es')).toBe('quinientos veintiuno');
        });

        it('538 should be quinientos treinta y ocho', () => {
          expect(pipe.transform(538, 'es')).toBe('quinientos treinta y ocho');
        });

        it('545 should be quinientos cuarenta y cinco', () => {
          expect(pipe.transform(545, 'es')).toBe('quinientos cuarenta y cinco');
        });

        it('558 should be quinientos cincuenta y ocho', () => {
          expect(pipe.transform(558, 'es')).toBe('quinientos cincuenta y ocho');
        });

        it('560 should be quinientos sesenta', () => {
          expect(pipe.transform(560, 'es')).toBe('quinientos sesenta');
        });

        it('573 should be quinientos setenta y tres', () => {
          expect(pipe.transform(573, 'es')).toBe('quinientos setenta y tres');
        });

        it('587 should be quinientos ochenta y siete', () => {
          expect(pipe.transform(587, 'es')).toBe('quinientos ochenta y siete');
        });

        it('595 should be quinientos noventa y cinco', () => {
          expect(pipe.transform(595, 'es')).toBe('quinientos noventa y cinco');
        });
      });

      describe('600 to 699', () => {
        it('602 should be seiscientos dos', () => {
          expect(pipe.transform(602, 'es')).toBe('seiscientos dos');
        });

        it('621 should be seiscientos veintiuno', () => {
          expect(pipe.transform(621, 'es')).toBe('seiscientos veintiuno');
        });

        it('638 should be seiscientos treinta y ocho', () => {
          expect(pipe.transform(638, 'es')).toBe('seiscientos treinta y ocho');
        });

        it('645 should be seiscientos cuarenta y cinco', () => {
          expect(pipe.transform(645, 'es')).toBe('seiscientos cuarenta y cinco');
        });

        it('658 should be seiscientos cincuenta y ocho', () => {
          expect(pipe.transform(658, 'es')).toBe('seiscientos cincuenta y ocho');
        });

        it('660 should be seiscientos sesenta', () => {
          expect(pipe.transform(660, 'es')).toBe('seiscientos sesenta');
        });

        it('673 should be seiscientos setenta y tres', () => {
          expect(pipe.transform(673, 'es')).toBe('seiscientos setenta y tres');
        });

        it('687 should be seiscientos ochenta y siete', () => {
          expect(pipe.transform(687, 'es')).toBe('seiscientos ochenta y siete');
        });

        it('695 should be seiscientos noventa y cinco', () => {
          expect(pipe.transform(695, 'es')).toBe('seiscientos noventa y cinco');
        });
      });

      describe('700 to 799', () => {
        it('702 should be setecientos dos', () => {
          expect(pipe.transform(702, 'es')).toBe('setecientos dos');
        });

        it('721 should be setecientos veintiuno', () => {
          expect(pipe.transform(721, 'es')).toBe('setecientos veintiuno');
        });

        it('738 should be setecientos treinta y ocho', () => {
          expect(pipe.transform(738, 'es')).toBe('setecientos treinta y ocho');
        });

        it('745 should be setecientos cuarenta y cinco', () => {
          expect(pipe.transform(745, 'es')).toBe('setecientos cuarenta y cinco');
        });

        it('758 should be setecientos cincuenta y ocho', () => {
          expect(pipe.transform(758, 'es')).toBe('setecientos cincuenta y ocho');
        });

        it('760 should be setecientos sesenta', () => {
          expect(pipe.transform(760, 'es')).toBe('setecientos sesenta');
        });

        it('773 should be setecientos setenta y tres', () => {
          expect(pipe.transform(773, 'es')).toBe('setecientos setenta y tres');
        });

        it('787 should be setecientos ochenta y siete', () => {
          expect(pipe.transform(787, 'es')).toBe('setecientos ochenta y siete');
        });

        it('795 should be setecientos noventa y cinco', () => {
          expect(pipe.transform(795, 'es')).toBe('setecientos noventa y cinco');
        });
      });

      describe('800 to 899', () => {
        it('802 should be ochocientos dos', () => {
          expect(pipe.transform(802, 'es')).toBe('ochocientos dos');
        });

        it('821 should be ochocientos veintiuno', () => {
          expect(pipe.transform(821, 'es')).toBe('ochocientos veintiuno');
        });

        it('838 should be ochocientos treinta y ocho', () => {
          expect(pipe.transform(838, 'es')).toBe('ochocientos treinta y ocho');
        });

        it('845 should be ochocientos cuarenta y cinco', () => {
          expect(pipe.transform(845, 'es')).toBe('ochocientos cuarenta y cinco');
        });

        it('858 should be ochocientos cincuenta y ocho', () => {
          expect(pipe.transform(858, 'es')).toBe('ochocientos cincuenta y ocho');
        });

        it('860 should be ochocientos sesenta', () => {
          expect(pipe.transform(860, 'es')).toBe('ochocientos sesenta');
        });

        it('873 should be ochocientos setenta y tres', () => {
          expect(pipe.transform(873, 'es')).toBe('ochocientos setenta y tres');
        });

        it('887 should be ochocientos ochenta y siete', () => {
          expect(pipe.transform(887, 'es')).toBe('ochocientos ochenta y siete');
        });

        it('895 should be ochocientos noventa y cinco', () => {
          expect(pipe.transform(895, 'es')).toBe('ochocientos noventa y cinco');
        });
      });

      describe('900 to 999', () => {
        it('902 should be novecientos dos', () => {
          expect(pipe.transform(902, 'es')).toBe('novecientos dos');
        });

        it('921 should be novecientos veintiuno', () => {
          expect(pipe.transform(921, 'es')).toBe('novecientos veintiuno');
        });

        it('938 should be novecientos treinta y ocho', () => {
          expect(pipe.transform(938, 'es')).toBe('novecientos treinta y ocho');
        });

        it('945 should be novecientos cuarenta y cinco', () => {
          expect(pipe.transform(945, 'es')).toBe('novecientos cuarenta y cinco');
        });

        it('958 should be novecientos cincuenta y ocho', () => {
          expect(pipe.transform(958, 'es')).toBe('novecientos cincuenta y ocho');
        });

        it('960 should be novecientos sesenta', () => {
          expect(pipe.transform(960, 'es')).toBe('novecientos sesenta');
        });

        it('973 should be novecientos setenta y tres', () => {
          expect(pipe.transform(973, 'es')).toBe('novecientos setenta y tres');
        });

        it('987 should be novecientos ochenta y siete', () => {
          expect(pipe.transform(987, 'es')).toBe('novecientos ochenta y siete');
        });

        it('995 should be novecientos noventa y cinco', () => {
          expect(pipe.transform(995, 'es')).toBe('novecientos noventa y cinco');
        });
      });

      describe('1000 to 9999', () => {
        it('1002 should be mil dos', () => {
          expect(pipe.transform(1002, 'es')).toBe('mil dos');
        });

        it(`2221 should be ${SUB_HUNDRED_ES[2]} mil doscientos veintiuno`, () => {
          expect(pipe.transform(2221, 'es')).toBe(`${SUB_HUNDRED_ES[2]} mil doscientos veintiuno`);
        });

        it(`3338 should be ${SUB_HUNDRED_ES[3]} mil trescientos treinta y ocho`, () => {
          expect(pipe.transform(3338, 'es')).toBe(`${SUB_HUNDRED_ES[3]} mil trescientos treinta y ocho`);
        });

        it(`4445 should be ${SUB_HUNDRED_ES[4]} mil cuatrocientos cuarenta y cinco`, () => {
          expect(pipe.transform(4445, 'es')).toBe(`${SUB_HUNDRED_ES[4]} mil cuatrocientos cuarenta y cinco`);
        });

        it(`5558 should be ${SUB_HUNDRED_ES[5]} mil quinientos cincuenta y ocho`, () => {
          expect(pipe.transform(5558, 'es')).toBe(`${SUB_HUNDRED_ES[5]} mil quinientos cincuenta y ocho`);
        });

        it(`6660 should be ${SUB_HUNDRED_ES[6]} mil seiscientos sesenta`, () => {
          expect(pipe.transform(6660, 'es')).toBe(`${SUB_HUNDRED_ES[6]} mil seiscientos sesenta`);
        });

        it(`7773 should be ${SUB_HUNDRED_ES[7]} mil setecientos setenta y tres`, () => {
          expect(pipe.transform(7773, 'es')).toBe(`${SUB_HUNDRED_ES[7]} mil setecientos setenta y tres`);
        });

        it(`8887 should be ${SUB_HUNDRED_ES[8]} mil ochocientos ochenta y siete`, () => {
          expect(pipe.transform(8887, 'es')).toBe(`${SUB_HUNDRED_ES[8]} mil ochocientos ochenta y siete`);
        });

        it(`9995 should be ${SUB_HUNDRED_ES[9]} mil novecientos noventa y cinco`, () => {
          expect(pipe.transform(9995, 'es')).toBe(`${SUB_HUNDRED_ES[9]} mil novecientos noventa y cinco`);
        });
      });

      describe('ten thousand to hundred thousand', () => {
        it(`10002 should be ${SUB_HUNDRED_ES[10]} mil dos`, () => {
          expect(pipe.transform(10002, 'es')).toBe(`${SUB_HUNDRED_ES[10]} mil dos`);
        });

        it(`22221 should be ${SUB_HUNDRED_ES[22]} mil doscientos veintiuno`, () => {
          expect(pipe.transform(22221, 'es')).toBe(`${SUB_HUNDRED_ES[22]} mil doscientos veintiuno`);
        });

        it(`33338 should be treinta y tres mil trescientos treinta y ocho`, () => {
          expect(pipe.transform(33338, 'es')).toBe(`treinta y tres mil trescientos treinta y ocho`);
        });

        it(`44445 should be cuarenta y cuatro mil cuatrocientos cuarenta y cinco`, () => {
          expect(pipe.transform(44445, 'es')).toBe(`cuarenta y cuatro mil cuatrocientos cuarenta y cinco`);
        });

        it(`55558 should be cincuenta y cinco mil quinientos cincuenta y ocho`, () => {
          expect(pipe.transform(55558, 'es')).toBe(`cincuenta y cinco mil quinientos cincuenta y ocho`);
        });

        it(`66660 should be sesenta y seis mil seiscientos sesenta`, () => {
          expect(pipe.transform(66660, 'es')).toBe(`sesenta y seis mil seiscientos sesenta`);
        });

        it(`77773 should be setenta y siete mil setecientos setenta y tres`, () => {
          expect(pipe.transform(77773, 'es')).toBe(`setenta y siete mil setecientos setenta y tres`);
        });

        it(`88887 should be ochenta y ocho mil ochocientos ochenta y siete`, () => {
          expect(pipe.transform(88887, 'es')).toBe(`ochenta y ocho mil ochocientos ochenta y siete`);
        });

        it(`99995 should be noventa y nueve mil novecientos noventa y cinco`, () => {
          expect(pipe.transform(99995, 'es')).toBe(`noventa y nueve mil novecientos noventa y cinco`);
        });
      });

      describe('hundred thousand to million', () => {
        it(`100002 should be cien mil dos`, () => {
          expect(pipe.transform(100002, 'es')).toBe(`cien mil dos`);
        });

        it(`222221 should bedoscientos veintidós mil doscientos veintiuno`, () => {
          expect(pipe.transform(222221, 'es')).toBe('doscientos veintidós mil doscientos veintiuno');
        });

        const word = 'trescientos treinta y tres mil trescientos treinta y ocho';
        it(`333338 should be ${word}`, () => {
          expect(pipe.transform(333338, 'es')).toBe(word);
        });

        const word2 = 'cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cinco';
        it(`444445 should be ${word2}`, () => {
          expect(pipe.transform(444445, 'es')).toBe(word2);
        });

        const word3 = 'quinientos cincuenta y cinco mil quinientos cincuenta y ocho';
        it(`555558 should be ${word3}`, () => {
          expect(pipe.transform(555558, 'es')).toBe(word3);
        });

        const word4 = 'seiscientos sesenta y seis mil seiscientos sesenta';
        it(`666660 should be ${word4}`, () => {
          expect(pipe.transform(666660, 'es')).toBe(word4);
        });

        const word5 = 'setecientos setenta y siete mil setecientos setenta y tres';
        it(`777773 should be ${word5}`, () => {
          expect(pipe.transform(777773, 'es')).toBe(word5);
        });

        const word6 = 'ochocientos ochenta y ocho mil ochocientos ochenta y siete';
        it(`888887 should be ${word6}`, () => {
          expect(pipe.transform(888887, 'es')).toBe(word6);
        });

        const word7 = 'novecientos noventa y nueve mil novecientos noventa y cinco';
        it(`999995 should be ${word7}`, () => {
          expect(pipe.transform(999995, 'es')).toBe(word7);
        });
      });

      describe('million to ten million', () => {
        const word = 'un millón dos';
        it(`1000002 should be ${word}`, () => {
          expect(pipe.transform(1000002, 'es')).toBe(word);
        });

        const word1 = 'dos millones doscientos veintidós mil doscientos veintiuno';
        it(`2222221 should be ${word1}`, () => {
          expect(pipe.transform(2222221, 'es')).toBe(word1);
        });

        const word2 = 'tres millones trescientos treinta y tres mil trescientos treinta y ocho';
        it(`3333338 should be ${word2}`, () => {
          expect(pipe.transform(3333338, 'es')).toBe(word2);
        });

        const word3 = 'cuatro millones cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cinco';
        it(`4444445 should be ${word3}`, () => {
          expect(pipe.transform(4444445, 'es')).toBe(word3);
        });

        const word4 = 'cinco millones quinientos cincuenta y cinco mil quinientos cincuenta y ocho';
        it(`5555558 should be ${word4}`, () => {
          expect(pipe.transform(5555558, 'es')).toBe(word4);
        });

        const word5 = 'seis millones seiscientos sesenta y seis mil seiscientos sesenta';
        it(`6666660 should be ${word5}`, () => {
          expect(pipe.transform(6666660, 'es')).toBe(word5);
        });

        const word6 = 'siete millones setecientos setenta y siete mil setecientos setenta y tres';
        it(`7777773 should be ${word6}`, () => {
          expect(pipe.transform(7777773, 'es')).toBe(word6);
        });

        const word7 = 'ocho millones ochocientos ochenta y ocho mil ochocientos ochenta y siete';
        it(`8888887 should be ${word7}`, () => {
          expect(pipe.transform(8888887, 'es')).toBe(word7);
        });

        const word8 = 'nueve millones novecientos noventa y nueve mil novecientos noventa y cinco';
        it(`9999995 should be ${word8}`, () => {
          expect(pipe.transform(9999995, 'es')).toBe(word8);
        });
      });

      describe('ten million to hundred million', () => {
        const word = 'once millones ciento once mil ciento doce';
        it(`11111112 should be ${word}`, () => {
          expect(pipe.transform(11111112, 'es')).toBe(word);
        });

        const word1 = 'veintidós millones doscientos veintidós mil doscientos veintiuno';
        it(`22222221 should be ${word1}`, () => {
          expect(pipe.transform(22222221, 'es')).toBe(word1);
        });

        const word2 = 'treinta y tres millones trescientos treinta y tres mil trescientos treinta y ocho';
        it(`33333338 should be ${word2}`, () => {
          expect(pipe.transform(33333338, 'es')).toBe(word2);
        });

        const word3 = 'cuarenta y cuatro millones cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cinco';
        it(`44444445 should be ${word3}`, () => {
          expect(pipe.transform(44444445, 'es')).toBe(word3);
        });

        const word4 = 'cincuenta y cinco millones quinientos cincuenta y cinco mil quinientos cincuenta y ocho';
        it(`55555558 should be ${word4}`, () => {
          expect(pipe.transform(55555558, 'es')).toBe(word4);
        });

        const word5 = 'sesenta y seis millones seiscientos sesenta y seis mil seiscientos sesenta';
        it(`66666660 should be ${word5}`, () => {
          expect(pipe.transform(66666660, 'es')).toBe(word5);
        });

        const word6 = 'setenta y siete millones setecientos setenta y siete mil setecientos setenta y tres';
        it(`77777773 should be ${word6}`, () => {
          expect(pipe.transform(77777773, 'es')).toBe(word6);
        });

        const word7 = 'ochenta y ocho millones ochocientos ochenta y ocho mil ochocientos ochenta y siete';
        it(`88888887 should be ${word7}`, () => {
          expect(pipe.transform(88888887, 'es')).toBe(word7);
        });

        const word8 = 'noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y cinco';
        it(`99999995 should be ${word8}`, () => {
          expect(pipe.transform(99999995, 'es')).toBe(word8);
        });
      });

      describe('billion to ten billion', () => {
        const word = 'ciento once millones ciento once mil ciento doce';
        it(`111111112 should be ${word}`, () => {
          expect(pipe.transform(111111112, 'es')).toBe(word);
        });

        const word1 = 'doscientos veintidós millones doscientos veintidós mil doscientos veintiuno';
        it(`222222221 should be ${word1}`, () => {
          expect(pipe.transform(222222221, 'es')).toBe(word1);
        });

        const word2 = 'trescientos treinta y tres millones trescientos treinta y tres mil trescientos treinta y ocho';
        it(`333333338 should be ${word2}`, () => {
          expect(pipe.transform(333333338, 'es')).toBe(word2);
        });

        const word3 = 'cuatrocientos cuarenta y cuatro millones cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cinco';
        it(`444444445 should be ${word3}`, () => {
          expect(pipe.transform(444444445, 'es')).toBe(word3);
        });

        const word4 = 'quinientos cincuenta y cinco millones quinientos cincuenta y cinco mil quinientos cincuenta y ocho';
        it(`555555558 should be ${word4}`, () => {
          expect(pipe.transform(555555558, 'es')).toBe(word4);
        });

        const word5 = 'seiscientos sesenta y seis millones seiscientos sesenta y seis mil seiscientos sesenta';
        it(`666666660 should be ${word5}`, () => {
          expect(pipe.transform(666666660, 'es')).toBe(word5);
        });

        const word6 = 'setecientos setenta y siete millones setecientos setenta y siete mil setecientos setenta y tres';
        it(`777777773 should be ${word6}`, () => {
          expect(pipe.transform(777777773, 'es')).toBe(word6);
        });

        const word7 = 'ochocientos ochenta y ocho millones ochocientos ochenta y ocho mil ochocientos ochenta y siete';
        it(`888888887 should be ${word7}`, () => {
          expect(pipe.transform(888888887, 'es')).toBe(word7);
        });

        const word8 = 'novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y cinco';
        it(`999999995 should be ${word8}`, () => {
          expect(pipe.transform(999999995, 'es')).toBe(word8);
        });
      });

      describe('10 billion to 100 billion', () => {
        const word = 'mil ciento once millones ciento once mil ciento doce';
        it(`1111111112 should be ${word}`, () => {
          expect(pipe.transform(1111111112, 'es')).toBe(word);
        });

        const word1 = 'dos mil doscientos veintidós millones doscientos veintidós mil doscientos veintiuno';
        it(`2222222221 should be ${word1}`, () => {
          expect(pipe.transform(2222222221, 'es')).toBe(word1);
        });

        const word2 = 'tres mil trescientos treinta y tres millones trescientos treinta y tres mil trescientos treinta y ocho';
        it(`3333333338 should be ${word2}`, () => {
          expect(pipe.transform(3333333338, 'es')).toBe(word2);
        });

        const word3 = `cuatro mil cuatrocientos cuarenta y cuatro millones cuatrocientos cuarenta y
                       cuatro mil cuatrocientos cuarenta y cinco`.replace(/\s+/g, ' ');
        it(`4444444445 should be ${word3}`, () => {
          expect(pipe.transform(4444444445, 'es')).toBe(word3);
        });

        const word4 = `cinco mil quinientos cincuenta y cinco millones
                       quinientos cincuenta y cinco mil quinientos cincuenta y ocho`.replace(/\s+/g, ' ');
        it(`5555555558 should be ${word4}`, () => {
          expect(pipe.transform(5555555558, 'es')).toBe(word4);
        });

        const word5 = `seis mil seiscientos sesenta y seis millones
                       seiscientos sesenta y seis mil seiscientos sesenta`.replace(/\s+/g, ' ');
        it(`6666666660 should be ${word5}`, () => {
          expect(pipe.transform(6666666660, 'es')).toBe(word5);
        });

        const word6 = `siete mil setecientos setenta y siete millones
                       setecientos setenta y siete mil setecientos setenta y tres`.replace(/\s+/g, ' ');
        it(`7777777773 should be ${word6}`, () => {
          expect(pipe.transform(7777777773, 'es')).toBe(word6);
        });

        const word7 = `ocho mil ochocientos ochenta y ocho millones
                       ochocientos ochenta y ocho mil ochocientos ochenta y siete`.replace(/\s+/g, ' ');
        it(`8888888887 should be ${word7}`, () => {
          expect(pipe.transform(8888888887, 'es')).toBe(word7);
        });

        const word8 = `nueve mil novecientos noventa y nueve millones
                       novecientos noventa y nueve mil novecientos noventa y cinco`.replace(/\s+/g, ' ');
        it(`9999999995 should be ${word8}`, () => {
          expect(pipe.transform(9999999995, 'es')).toBe(word8);
        });
      });

      describe('100 billion to trillion', () => {
        const word = 'once mil ciento once millones ciento once mil ciento doce';
        it(`11111111112 should be ${word}`, () => {
          expect(pipe.transform(11111111112, 'es')).toBe(word);
        });

        const word1 = `veintidós mil doscientos veintidós millones
                       doscientos veintidós mil doscientos veintiuno`.replace(/\s+/g, ' ');
        it(`22222222221 should be ${word1}`, () => {
          expect(pipe.transform(22222222221, 'es')).toBe(word1);
        });

        const word2 = `treinta y tres mil trescientos treinta y tres millones
                       trescientos treinta y tres mil trescientos treinta y ocho`.replace(/\s+/g, ' ');
        it(`33333333338 should be ${word2}`, () => {
          expect(pipe.transform(33333333338, 'es')).toBe(word2);
        });

        const word3 = `cuarenta y cuatro mil cuatrocientos cuarenta y cuatro millones
                       cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cinco`.replace(/\s+/g, ' ');
        it(`44444444445 should be ${word3}`, () => {
          expect(pipe.transform(44444444445, 'es')).toBe(word3);
        });

        const word4 = `cincuenta y cinco mil quinientos cincuenta y cinco millones
                       quinientos cincuenta y cinco mil quinientos cincuenta y ocho`.replace(/\s+/g, ' ');
        it(`55555555558 should be ${word4}`, () => {
          expect(pipe.transform(55555555558, 'es')).toBe(word4);
        });

        const word5 = `sesenta y seis mil seiscientos sesenta y seis millones
                       seiscientos sesenta y seis mil seiscientos sesenta`.replace(/\s+/g, ' ');
        it(`66666666660 should be ${word5}`, () => {
          expect(pipe.transform(66666666660, 'es')).toBe(word5);
        });

        const word6 = `setenta y siete mil setecientos setenta y siete millones
                       setecientos setenta y siete mil setecientos setenta y tres`.replace(/\s+/g, ' ');
        it(`77777777773 should be ${word6}`, () => {
          expect(pipe.transform(77777777773, 'es')).toBe(word6);
        });

        const word7 = `ochenta y ocho mil ochocientos ochenta y ocho millones
                       ochocientos ochenta y ocho mil ochocientos ochenta y siete`.replace(/\s+/g, ' ');
        it(`88888888887 should be ${word7}`, () => {
          expect(pipe.transform(88888888887, 'es')).toBe(word7);
        });

        const word8 = `noventa y nueve mil novecientos noventa y nueve millones
                       novecientos noventa y nueve mil novecientos noventa y cinco`.replace(/\s+/g, ' ');
        it(`99999999995 should be ${word8}`, () => {
          expect(pipe.transform(99999999995, 'es')).toBe(word8);
        });
      });

      describe('trillion to 10 trillion', () => {
        const word = 'ciento once mil ciento once millones ciento once mil ciento doce';
        it(`111111111112 should be ${word}`, () => {
          expect(pipe.transform(111111111112, 'es')).toBe(word);
        });

        const word1 = `doscientos veintidós mil doscientos veintidós millones
                       doscientos veintidós mil doscientos veintiuno`.replace(/\s+/g, ' ');
        it(`222222222221 should be ${word1}`, () => {
          expect(pipe.transform(222222222221, 'es')).toBe(word1);
        });

        const word2 = `trescientos treinta y tres mil trescientos treinta y tres millones
                       trescientos treinta y tres mil trescientos treinta y ocho`.replace(/\s+/g, ' ');
        it(`333333333338 should be ${word2}`, () => {
          expect(pipe.transform(333333333338, 'es')).toBe(word2);
        });

        const word3 = `cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cuatro millones
                       cuatrocientos cuarenta y cuatro mil cuatrocientos cuarenta y cinco`.replace(/\s+/g, ' ');
        it(`444444444445 should be ${word3}`, () => {
          expect(pipe.transform(444444444445, 'es')).toBe(word3);
        });

        const word4 = `quinientos cincuenta y cinco mil quinientos cincuenta y cinco millones
                       quinientos cincuenta y cinco mil quinientos cincuenta y ocho`.replace(/\s+/g, ' ');
        it(`555555555558 should be ${word4}`, () => {
          expect(pipe.transform(555555555558, 'es')).toBe(word4);
        });

        const word5 = `seiscientos sesenta y seis mil seiscientos sesenta y seis millones
                       seiscientos sesenta y seis mil seiscientos sesenta`.replace(/\s+/g, ' ');
        it(`666666666660 should be ${word5}`, () => {
          expect(pipe.transform(666666666660, 'es')).toBe(word5);
        });

        const word6 = `setecientos setenta y siete mil setecientos setenta y siete millones
                       setecientos setenta y siete mil setecientos setenta y tres`.replace(/\s+/g, ' ');
        it(`777777777773 should be ${word6}`, () => {
          expect(pipe.transform(777777777773, 'es')).toBe(word6);
        });

        const word7 = `ochocientos ochenta y ocho mil ochocientos ochenta y ocho millones
                       ochocientos ochenta y ocho mil ochocientos ochenta y siete`.replace(/\s+/g, ' ');
        it(`888888888887 should be ${word7}`, () => {
          expect(pipe.transform(888888888887, 'es')).toBe(word7);
        });

        const word8 = `novecientos noventa y nueve mil novecientos noventa y nueve millones
                       novecientos noventa y nueve mil novecientos noventa y cinco`.replace(/\s+/g, ' ');
        it(`999999999995 should be ${word8}`, () => {
          expect(pipe.transform(999999999995, 'es')).toBe(word8);
        });
      });

      describe('10 trillion to 100 trillion', () => {
        const word = 'un billón ciento once mil ciento once millones ciento once mil ciento doce';
        it(`1111111111112 should be ${word}`, () => {
          expect(pipe.transform(1111111111112, 'es')).toBe(word);
        });

        const word1 = `dos billones doscientos veintidós mil doscientos veintidós millones
                       doscientos veintidós mil doscientos veintiuno`.replace(/\s+/g, ' ');
        it(`2222222222221 should be ${word1}`, () => {
          expect(pipe.transform(2222222222221, 'es')).toBe(word1);
        });

        const word2 = `tres billones trescientos treinta y tres mil trescientos treinta y tres millones
                       trescientos treinta y tres mil trescientos treinta y ocho`.replace(/\s+/g, ' ');
        it(`3333333333338 should be ${word2}`, () => {
          expect(pipe.transform(3333333333338, 'es')).toBe(word2);
        });

        const word3 = `cuatro billones cuatrocientos cuarenta y cuatro mil cuatrocientos
                       cuarenta y cuatro millones cuatrocientos cuarenta y cuatro mil
                       cuatrocientos cuarenta y cinco`.replace(/\s+/g, ' ');
        it(`4444444444445 should be ${word3}`, () => {
          expect(pipe.transform(4444444444445, 'es')).toBe(word3);
        });

        const word4 = `cinco billones quinientos cincuenta y cinco mil
                       quinientos cincuenta y cinco millones quinientos cincuenta y
                       cinco mil quinientos cincuenta y ocho`.replace(/\s+/g, ' ');
        it(`5555555555558 should be ${word4}`, () => {
          expect(pipe.transform(5555555555558, 'es')).toBe(word4);
        });

        const word5 = `seis billones seiscientos sesenta y seis mil seiscientos sesenta y
                       seis millones seiscientos sesenta y seis mil seiscientos sesenta`.replace(/\s+/g, ' ');
        it(`6666666666660 should be ${word5}`, () => {
          expect(pipe.transform(6666666666660, 'es')).toBe(word5);
        });

        const word6 = `siete billones setecientos setenta y siete mil setecientos setenta y
                       siete millones setecientos setenta y siete mil setecientos
                       setenta y tres`.replace(/\s+/g, ' ');
        it(`7777777777773 should be ${word6}`, () => {
          expect(pipe.transform(7777777777773, 'es')).toBe(word6);
        });

        const word7 = `ocho billones ochocientos ochenta y ocho mil ochocientos ochenta y
                       ocho millones ochocientos ochenta y ocho mil ochocientos
                       ochenta y siete`.replace(/\s+/g, ' ');
        it(`8888888888887 should be ${word7}`, () => {
          expect(pipe.transform(8888888888887, 'es')).toBe(word7);
        });

        const word8 = `nueve billones novecientos noventa y nueve mil novecientos noventa y
                       nueve millones novecientos noventa y nueve mil
                       novecientos noventa y cinco`.replace(/\s+/g, ' ');
        it(`9999999999995 should be ${word8}`, () => {
          expect(pipe.transform(9999999999995, 'es')).toBe(word8);
        });
      });
    });
  });
});
