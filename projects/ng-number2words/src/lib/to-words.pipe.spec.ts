import { ToWordsPipe } from './to-words.pipe';

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
          console.log(pipe.transform(12321, 'es'));
          expect(pipe.transform(100, 'es')).toBe('cien');
        });
      });

      describe('100 to 200', () => {
        it('105 should be ciento cinco', () => {
          expect(pipe.transform(105, 'es')).toBe('ciento cinco');
        });
      });
    });
  });
});
