import { ToHinduArabicWordsPipe } from './to-hindu-arabic-words.pipe';

describe('ToHinduArabicWordsPipe', () => {
  const pipe = new ToHinduArabicWordsPipe();
  it('the pipe should exist', () => {
    expect(pipe).toBeTruthy();
  });

  describe('falsy valuess', () => {
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
    it('-97 should be minus ninety seven', () => {
      expect(pipe.transform(-97)).toBe('minus ninety seven');
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
    it('100000 should be one lakh', () => {
      expect(pipe.transform(100000)).toBe('one lakh');
    });
    it('1000000 should be ten lakh', () => {
      expect(pipe.transform(1000000)).toBe('ten lakh');
    });
    it('10000000 should be one crore', () => {
      expect(pipe.transform(10000000)).toBe('one crore');
    });
    it('100000000 should be ten crore', () => {
      expect(pipe.transform(100000000)).toBe('ten crore');
    });
    it('1000000000 should be one arab', () => {
      expect(pipe.transform(1000000000)).toBe('one arab');
    });
    it('10000000000 should be ten arab', () => {
      expect(pipe.transform(10000000000)).toBe('ten arab');
    });
    it('100000000000 should be one kharab', () => {
      expect(pipe.transform(100000000000)).toBe('one kharab');
    });
    it('1000000000000 should be ten kharab', () => {
      expect(pipe.transform(1000000000000)).toBe('ten kharab');
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

  describe('thousand to lakh', () => {
    it('1243 should be one thousand two hundred forty three', () => {
      expect(pipe.transform(1243)).toBe('one thousand two hundred forty three');
    });

    it('3756 should be three thousand seven hundred fifty six', () => {
      expect(pipe.transform(3756)).toBe('three thousand seven hundred fifty six');
    });

    it('57432 should be fifty seven thousand four hundred thirty two', () => {
      expect(pipe.transform(57432)).toBe('fifty seven thousand four hundred thirty two');
    });

    it('987654 should be nine lakh eighty seven thousand six hundred fifty four', () => {
      expect(pipe.transform(987654))
        .toBe('nine lakh eighty seven thousand six hundred fifty four');
    });
  });

  describe('lakh to crore', () => {
    it('1000003 should be ten lakh three', () => {
      expect(pipe.transform(1000003)).toBe('ten lakh three');
    });

    it('13800264 should be one crore thirty eight lakh two hundred sixty four', () => {
      expect(pipe.transform(13800264))
        .toBe('one crore thirty eight lakh two hundred sixty four');
    });

    const word = `ninety nine crore
                  ninety nine lakh
                  ninety nine thousand
                  nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(
      `999999999 should be ${word}`,
      () => {
        expect(pipe.transform(999999999)).toBe(word);
      });
  });

  describe('arab to kharab', () => {
    const word1 = `one arab
                   twenty three crore
                   forty five lakh
                   sixty seven thousand eighty nine`.replace(/\s+/g, ' ');
    it(`1234567089 should be ${word1}`, () => {
      expect(pipe.transform(1234567089)).toBe(word1);
    });

    const word2 = `fourteen arab
                   sixty crore
                   seven lakh
                   twenty eight thousand
                   one hundred ninety five`.replace(/\s+/g, ' ');
    it(`14600728195 should be ${word2}`, () => {
      expect(pipe.transform(14600728195)).toBe(word2);
    });

    const word3 = `nine kharab
                   ninety nine arab
                   ninety nine crore
                   ninety nine lakh
                   ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(`999999999999 should be ${word3}`, () => {
      expect(pipe.transform(999999999999)).toBe(word3);
    });

    const word4 = `ninety nine kharab
                   ninety nine arab
                   ninety nine crore
                   ninety nine lakh
                   ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(`9999999999999 should be ${word4}`, () => {
      expect(pipe.transform(9999999999999)).toBe(word4);
    });

    it(`10000000000000 should be empty`, () => {
      expect(pipe.transform(10000000000000)).toBe('');
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

  describe('Language', () => {
    describe('NP', () => {
      describe('0 - 10', () => {
        it('0 should be शून्य', () => {
          expect(pipe.transform(0, 'np')).toBe('शून्य');
        });
        it('1 should be एक', () => {
          expect(pipe.transform(1, 'np')).toBe('एक');
        });
        it('2 should be दुई', () => {
          expect(pipe.transform(2, 'np')).toBe('दुई');
        });
        it('3 should be तीन', () => {
          expect(pipe.transform(3, 'np')).toBe('तीन');
        });
        it('4 should be चार', () => {
          expect(pipe.transform(4, 'np')).toBe('चार');
        });
        it('5 should be पाँच', () => {
          expect(pipe.transform(5, 'np')).toBe('पाँच');
        });
        it('6 should be छ', () => {
          expect(pipe.transform(6, 'np')).toBe('छ');
        });
        it('7 should be सात', () => {
          expect(pipe.transform(7, 'np')).toBe('सात');
        });
        it('8 should be आठ', () => {
          expect(pipe.transform(8, 'np')).toBe('आठ');
        });
        it('9 should be नौ', () => {
          expect(pipe.transform(9, 'np')).toBe('नौ');
        });
        it('10 should be दश', () => {
          expect(pipe.transform(10, 'np')).toBe('दश');
        });
      });

      describe('11 - 20', () => {
        it('11 should be एघार', () => {
          expect(pipe.transform(11, 'np')).toBe('एघार');
        });
        it('12 should be बाह्र', () => {
          expect(pipe.transform(12, 'np')).toBe('बाह्र');
        });
        it('13 should be तेह्र', () => {
          expect(pipe.transform(13, 'np')).toBe('तेह्र');
        });
        it('14 should be चौध', () => {
          expect(pipe.transform(14, 'np')).toBe('चौध');
        });
        it('15 should be पन्ध्र', () => {
          expect(pipe.transform(15, 'np')).toBe('पन्ध्र');
        });
        it('16 should be सोह्र', () => {
          expect(pipe.transform(16, 'np')).toBe('सोह्र');
        });
        it('17 should be सत्र', () => {
          expect(pipe.transform(17, 'np')).toBe('सत्र');
        });
        it('18 should be अठार', () => {
          expect(pipe.transform(18, 'np')).toBe('अठार');
        });
        it('19 should be उन्नाइस', () => {
          expect(pipe.transform(19, 'np')).toBe('उन्नाइस');
        });
        it('20 should be बीस', () => {
          expect(pipe.transform(20, 'np')).toBe('बीस');
        });
      });

      describe('21 - 30', () => {
        it('21 should be एक्काइस', () => {
          expect(pipe.transform(21, 'np')).toBe('एक्काइस');
        });
        it('22 should be बाइस', () => {
          expect(pipe.transform(22, 'np')).toBe('बाइस');
        });
        it('23 should be त्येइस', () => {
          expect(pipe.transform(23, 'np')).toBe('त्येइस');
        });
        it('24 should be चौबीस', () => {
          expect(pipe.transform(24, 'np')).toBe('चौबीस');
        });
        it('25 should be पच्चीस', () => {
          expect(pipe.transform(25, 'np')).toBe('पच्चीस');
        });
        it('26 should be छब्बीस', () => {
          expect(pipe.transform(26, 'np')).toBe('छब्बीस');
        });
        it('27 should be सत्ताइस', () => {
          expect(pipe.transform(27, 'np')).toBe('सत्ताइस');
        });
        it('28 should be अठ्ठाइस', () => {
          expect(pipe.transform(28, 'np')).toBe('अठ्ठाइस');
        });
        it('29 should be उनन्तीस', () => {
          expect(pipe.transform(29, 'np')).toBe('उनन्तीस');
        });
        it('30 should be तीस', () => {
          expect(pipe.transform(30, 'np')).toBe('तीस');
        });
      });

      describe('31 - 40', () => {
        it('31 should be एक्तीस', () => {
          expect(pipe.transform(31, 'np')).toBe('एक्तीस');
        });
        it('32 should be बत्तीस', () => {
          expect(pipe.transform(32, 'np')).toBe('बत्तीस');
        });
        it('33 should be तेत्तिस', () => {
          expect(pipe.transform(33, 'np')).toBe('तेत्तिस');
        });
        it('34 should be चौंतीस', () => {
          expect(pipe.transform(34, 'np')).toBe('चौंतीस');
        });
        it('35 should be पैंतीस', () => {
          expect(pipe.transform(35, 'np')).toBe('पैंतीस');
        });
        it('36 should be छत्तीस', () => {
          expect(pipe.transform(36, 'np')).toBe('छत्तीस');
        });
        it('37 should be सर्तीस', () => {
          expect(pipe.transform(37, 'np')).toBe('सर्तीस');
        });
        it('38 should be अर्तीस', () => {
          expect(pipe.transform(38, 'np')).toBe('अर्तीस');
        });
        it('39 should be उनन्चालीस', () => {
          expect(pipe.transform(39, 'np')).toBe('उनन्चालीस');
        });
        it('40 should be चालीस', () => {
          expect(pipe.transform(40, 'np')).toBe('चालीस');
        });
      });

      describe('41 - 50', () => {
        it('41 should be एकचालीस', () => {
          expect(pipe.transform(41, 'np')).toBe('एकचालीस');
        });
        it('42 should be बयालीस', () => {
          expect(pipe.transform(42, 'np')).toBe('बयालीस');
        });
        it('43 should be त्रिचालीस', () => {
          expect(pipe.transform(43, 'np')).toBe('त्रिचालीस');
        });
        it('44 should be चवालीस', () => {
          expect(pipe.transform(44, 'np')).toBe('चवालीस');
        });
        it('45 should be पैंतालीस', () => {
          expect(pipe.transform(45, 'np')).toBe('पैंतालीस');
        });
        it('46 should be छयालीस', () => {
          expect(pipe.transform(46, 'np')).toBe('छयालीस');
        });
        it('47 should be सर्चालीस', () => {
          expect(pipe.transform(47, 'np')).toBe('सर्चालीस');
        });
        it('48 should be अर्चालीस', () => {
          expect(pipe.transform(48, 'np')).toBe('अर्चालीस');
        });
        it('49 should be उनन्चास', () => {
          expect(pipe.transform(49, 'np')).toBe('उनन्चास');
        });
        it('50 should be पचास', () => {
          expect(pipe.transform(50, 'np')).toBe('पचास');
        });
      });

      describe('51 - 60', () => {
        it('51 should be एकाउन्न', () => {
          expect(pipe.transform(51, 'np')).toBe('एकाउन्न');
        });
        it('52 should be बाउन्न', () => {
          expect(pipe.transform(52, 'np')).toBe('बाउन्न');
        });
        it('53 should be त्रिपन्न', () => {
          expect(pipe.transform(53, 'np')).toBe('त्रिपन्न');
        });
        it('54 should be चौवन्न', () => {
          expect(pipe.transform(54, 'np')).toBe('चौवन्न');
        });
        it('55 should be पचपन्न', () => {
          expect(pipe.transform(55, 'np')).toBe('पचपन्न');
        });
        it('56 should be छ्प्पन्न', () => {
          expect(pipe.transform(56, 'np')).toBe('छ्प्पन्न');
        });
        it('57 should be सन्ताउन्न', () => {
          expect(pipe.transform(57, 'np')).toBe('सन्ताउन्न');
        });
        it('58 should be अन्ठाउन्न', () => {
          expect(pipe.transform(58, 'np')).toBe('अन्ठाउन्न');
        });
        it('59 should be उनान्साठ्ठी', () => {
          expect(pipe.transform(59, 'np')).toBe('उनान्साठ्ठी');
        });
        it('60 should be साठ्ठी', () => {
          expect(pipe.transform(60, 'np')).toBe('साठ्ठी');
        });
      });

      describe('61 - 70', () => {
        it('61 should be एकसट्ठी', () => {
          expect(pipe.transform(61, 'np')).toBe('एकसट्ठी');
        });
        it('62 should be बैसट्ठी', () => {
          expect(pipe.transform(62, 'np')).toBe('बैसट्ठी');
        });
        it('63 should be त्रिसट्ठी', () => {
          expect(pipe.transform(63, 'np')).toBe('त्रिसट्ठी');
        });
        it('64 should be चौंसठ्ठी', () => {
          expect(pipe.transform(64, 'np')).toBe('चौंसठ्ठी');
        });
        it('65 should be पैंसठ्ठी', () => {
          expect(pipe.transform(65, 'np')).toBe('पैंसठ्ठी');
        });
        it('66 should be छैंसठ्ठी', () => {
          expect(pipe.transform(66, 'np')).toBe('छैंसठ्ठी');
        });
        it('67 should be सर्सठ्ठी', () => {
          expect(pipe.transform(67, 'np')).toBe('सर्सठ्ठी');
        });
        it('68 should be अर्सठ्ठी', () => {
          expect(pipe.transform(68, 'np')).toBe('अर्सठ्ठी');
        });
        it('69 should be उनन्सत्तरी', () => {
          expect(pipe.transform(69, 'np')).toBe('उनन्सत्तरी');
        });
        it('70 should be सत्तरी', () => {
          expect(pipe.transform(70, 'np')).toBe('सत्तरी');
        });
      });

      describe('71 - 80', () => {
        it('71 should be एकत्तर', () => {
          expect(pipe.transform(71, 'np')).toBe('एकत्तर');
        });
        it('72 should be बहत्तर', () => {
          expect(pipe.transform(72, 'np')).toBe('बहत्तर');
        });
        it('73 should be त्रीहत्तर', () => {
          expect(pipe.transform(73, 'np')).toBe('त्रीहत्तर');
        });
        it('74 should be चौरत्तर', () => {
          expect(pipe.transform(74, 'np')).toBe('चौरत्तर');
        });
        it('75 should be पचहत्तर', () => {
          expect(pipe.transform(75, 'np')).toBe('पचहत्तर');
        });
        it('76 should be छयत्तर', () => {
          expect(pipe.transform(76, 'np')).toBe('छयत्तर');
        });
        it('77 should be सतहत्तर', () => {
          expect(pipe.transform(77, 'np')).toBe('सतहत्तर');
        });
        it('78 should be अठहत्तर', () => {
          expect(pipe.transform(78, 'np')).toBe('अठहत्तर');
        });
        it('79 should be उनास्सी', () => {
          expect(pipe.transform(79, 'np')).toBe('उनास्सी');
        });
        it('80 should be अस्सी', () => {
          expect(pipe.transform(80, 'np')).toBe('अस्सी');
        });
      });

      describe('81 - 90', () => {
        it('81 should be एकास्सी', () => {
          expect(pipe.transform(81, 'np')).toBe('एकास्सी');
        });
        it('82 should be बयास्सी', () => {
          expect(pipe.transform(82, 'np')).toBe('बयास्सी');
        });
        it('83 should be त्रियास्सी', () => {
          expect(pipe.transform(83, 'np')).toBe('त्रियास्सी');
        });
        it('84 should be चैरस्सी', () => {
          expect(pipe.transform(84, 'np')).toBe('चैरस्सी');
        });
        it('85 should be पचास्सी', () => {
          expect(pipe.transform(85, 'np')).toBe('पचास्सी');
        });
        it('86 should be छायास्सी', () => {
          expect(pipe.transform(86, 'np')).toBe('छायास्सी');
        });
        it('87 should be सत्तास्सी', () => {
          expect(pipe.transform(87, 'np')).toBe('सत्तास्सी');
        });
        it('88 should be अठास्सी', () => {
          expect(pipe.transform(88, 'np')).toBe('अठास्सी');
        });
        it('89 should be उनन्नाब्बे', () => {
          expect(pipe.transform(89, 'np')).toBe('उनन्नाब्बे');
        });
        it('90 should be नब्बे', () => {
          expect(pipe.transform(90, 'np')).toBe('नब्बे');
        });
      });

      describe('91 - 100', () => {
        it('91 should be एकान्नब्बे', () => {
          expect(pipe.transform(91, 'np')).toBe('एकान्नब्बे');
        });
        it('92 should be बयान्नब्बे', () => {
          expect(pipe.transform(92, 'np')).toBe('बयान्नब्बे');
        });
        it('93 should be त्रियान्नब्बे', () => {
          expect(pipe.transform(93, 'np')).toBe('त्रियान्नब्बे');
        });
        it('94 should be चौरान्नब्बे', () => {
          expect(pipe.transform(94, 'np')).toBe('चौरान्नब्बे');
        });
        it('95 should be पन्चान्नब्बे', () => {
          expect(pipe.transform(95, 'np')).toBe('पन्चान्नब्बे');
        });
        it('96 should be छायान्नब्बे', () => {
          expect(pipe.transform(96, 'np')).toBe('छायान्नब्बे');
        });
        it('97 should be सन्तान्नब्बे', () => {
          expect(pipe.transform(97, 'np')).toBe('सन्तान्नब्बे');
        });
        it('98 should be अन्ठान्नब्बे', () => {
          expect(pipe.transform(98, 'np')).toBe('अन्ठान्नब्बे');
        });
        it('99 should be उनन्सय', () => {
          expect(pipe.transform(99, 'np')).toBe('उनन्सय');
        });
        it('100 should be एक सय', () => {
          expect(pipe.transform(100, 'np')).toBe('एक सय');
        });
      });

      describe('100 - 999', () => {
        it('121 should be एक सय एक्काइस', () => {
          expect(pipe.transform(121, 'np')).toBe('एक सय एक्काइस');
        });
        it('257 should be दुई सय सन्ताउन्न', () => {
          expect(pipe.transform(257, 'np')).toBe('दुई सय सन्ताउन्न');
        });
        it('382 should be तीन सय बयास्सी', () => {
          expect(pipe.transform(382, 'np')).toBe('तीन सय बयास्सी');
        });
        it('495 should be चार सय पन्चान्नब्बे', () => {
          expect(pipe.transform(495, 'np')).toBe('चार सय पन्चान्नब्बे');
        });
        it('572 should be पाँच सय बहत्तर', () => {
          expect(pipe.transform(572, 'np')).toBe('पाँच सय बहत्तर');
        });
        it('690 should be छ सय नब्बे', () => {
          expect(pipe.transform(690, 'np')).toBe('छ सय नब्बे');
        });
        it('765 should be सात सय पैंसठ्ठी', () => {
          expect(pipe.transform(765, 'np')).toBe('सात सय पैंसठ्ठी');
        });
        it('878 should be आठ सय अठहत्तर', () => {
          expect(pipe.transform(878, 'np')).toBe('आठ सय अठहत्तर');
        });
        it('999 should be नौ सय उनन्सय', () => {
          expect(pipe.transform(999, 'np')).toBe('नौ सय उनन्सय');
        });
      });

      describe('thousand to lakh', () => {
        it('1243 should be एक हजार दुई सय त्रिचालीस', () => {
          expect(pipe.transform(1243, 'np')).toBe('एक हजार दुई सय त्रिचालीस');
        });

        it('3756 should be तीन हजार सात सय छ्प्पन्न', () => {
          expect(pipe.transform(3756, 'np')).toBe('तीन हजार सात सय छ्प्पन्न');
        });

        it('57432 should be सन्ताउन्न हजार चार सय बत्तीस', () => {
          expect(pipe.transform(57432, 'np')).toBe('सन्ताउन्न हजार चार सय बत्तीस');
        });

        it('987654 should be नौ लाख सत्तास्सी हजार छ सय चौवन्न', () => {
          expect(pipe.transform(987654, 'np'))
            .toBe('नौ लाख सत्तास्सी हजार छ सय चौवन्न');
        });
      });

      describe('lakh to crore', () => {
        it('1000003 should be दश लाख तीन', () => {
          expect(pipe.transform(1000003, 'np')).toBe('दश लाख तीन');
        });

        it('13800264 should be एक करोड अर्तीस लाख दुई सय चौंसठ्ठी', () => {
          expect(pipe.transform(13800264, 'np'))
            .toBe('एक करोड अर्तीस लाख दुई सय चौंसठ्ठी');
        });

        it('999999999 should be उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय', () => {
          expect(pipe.transform(999999999, 'np')).toBe('उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय');
        });
      });

      describe('arab to kharab', () => {
        it('1234567089 should be एक अर्ब त्येइस करोड पैंतालीस लाख सर्सठ्ठी हजार उनन्नाब्बे', () => {
          expect(pipe.transform(1234567089, 'np')).toBe('एक अर्ब त्येइस करोड पैंतालीस लाख सर्सठ्ठी हजार उनन्नाब्बे');
        });

        it('14600728195 should be चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे', () => {
          expect(pipe.transform(14600728195, 'np')).toBe('चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे');
        });

        it('999999999999 should be नौ खर्ब उनन्सय अर्ब उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय', () => {
          expect(pipe.transform(999999999999, 'np')).toBe('नौ खर्ब उनन्सय अर्ब उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय');
        });

        it('8765432109876 should be सत्तास्सी खर्ब पैंसठ्ठी अर्ब त्रिचालीस करोड एक्काइस लाख नौ हजार आठ सय छयत्तर', () => {
          expect(pipe.transform(8765432109876, 'np'))
            .toBe('सत्तास्सी खर्ब पैंसठ्ठी अर्ब त्रिचालीस करोड एक्काइस लाख नौ हजार आठ सय छयत्तर');
        });
        it('10000000000000 should be empty', () => {
          expect(pipe.transform(10000000000000, 'np')).toBe('');
        });
      });

      describe('decimal inputs', () => {
        it('should output छ दशमलब एक दुई तीन', () => {
          expect(pipe.transform(6.123, 'np')).toBe('छ दशमलब एक दुई तीन');
        });

        it('should output दुई दशमलब चार पाँच छ', () => {
          expect(pipe.transform(2.456, 'np')).toBe('दुई दशमलब चार पाँच छ');
        });

        it('should output पाँच दशमलब शून्य नौ आठ सात', () => {
          expect(pipe.transform(5.0987, 'np')).toBe('पाँच दशमलब शून्य नौ आठ सात');
        });
      });
    });
  });
});
