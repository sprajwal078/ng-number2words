import { ToHinduArabicWordsPipe } from './to-hindu-arabic-words.pipe';

describe('ToHinduArabicWordsPipe', () => {
  const pipe = new ToHinduArabicWordsPipe();
  it('the pipe should exist', () => {
    expect(pipe).toBeTruthy();
  });

  describe('sub 20s', () => {
    it('0 should be zero', () => {
      expect(pipe.transform(0)).toMatch('zero');
    });

    it('1 should be one', () => {
      expect(pipe.transform(1)).toMatch('one');
    });
    it('2 should be two', () => {
      expect(pipe.transform(2)).toMatch('two');
    });
    it('3 should be three', () => {
      expect(pipe.transform(3)).toMatch('three');
    });
    it('4 should be four', () => {
      expect(pipe.transform(4)).toMatch('four');
    });
    it('5 should be five', () => {
      expect(pipe.transform(5)).toMatch('five');
    });
    it('6 should be six', () => {
      expect(pipe.transform(6)).toMatch('six');
    });
    it('7 should be seven', () => {
      expect(pipe.transform(7)).toMatch('seven');
    });
    it('8 should be eight', () => {
      expect(pipe.transform(8)).toMatch('eight');
    });
    it('9 should be nine', () => {
      expect(pipe.transform(9)).toMatch('nine');
    });
    it('10 should be ten', () => {
      expect(pipe.transform(10)).toMatch('ten');
    });
    it('11 should be eleven', () => {
      expect(pipe.transform(11)).toMatch('eleven');
    });
    it('12 should be twelve', () => {
      expect(pipe.transform(12)).toMatch('twelve');
    });
    it('13 should be thirteen', () => {
      expect(pipe.transform(13)).toMatch('thirteen');
    });
    it('14 should be fourteen', () => {
      expect(pipe.transform(14)).toMatch('fourteen');
    });
    it('15 should be fifteen', () => {
      expect(pipe.transform(15)).toMatch('fifteen');
    });
    it('16 should be sixteen', () => {
      expect(pipe.transform(16)).toMatch('sixteen');
    });
    it('17 should be seventeen', () => {
      expect(pipe.transform(17)).toMatch('seventeen');
    });
    it('18 should be eighteen', () => {
      expect(pipe.transform(18)).toMatch('eighteen');
    });
    it('19 should be nineteen', () => {
      expect(pipe.transform(19)).toMatch('nineteen');
    });
  });

  describe('negative number', () => {
    it('-97 should be minus ninety seven', () => {
      expect(pipe.transform(-97)).toMatch('minus ninety seven');
    });
  });
  describe('tenths', () => {
    it('10 should be ten', () => {
      expect(pipe.transform(10)).toMatch('ten');
    });
    it('20 should be twenty', () => {
      expect(pipe.transform(20)).toMatch('twenty');
    });
    it('30 should be thirty', () => {
      expect(pipe.transform(30)).toMatch('thirty');
    });
    it('40 should be forty', () => {
      expect(pipe.transform(40)).toMatch('forty');
    });
    it('50 should be fifty', () => {
      expect(pipe.transform(50)).toMatch('fifty');
    });
    it('60 should be sixty', () => {
      expect(pipe.transform(60)).toMatch('sixty');
    });
    it('70 should be seventy', () => {
      expect(pipe.transform(70)).toMatch('seventy');
    });
    it('80 should be eighty', () => {
      expect(pipe.transform(80)).toMatch('eighty');
    });
    it('90 should be ninety', () => {
      expect(pipe.transform(90)).toMatch('ninety');
    });
    it('100 should be one hundred', () => {
      expect(pipe.transform(100)).toMatch('one hundred');
    });
    it('1000 should be one thousand', () => {
      expect(pipe.transform(1000)).toMatch('one thousand');
    });
    it('10000 should be ten thousand', () => {
      expect(pipe.transform(10000)).toMatch('ten thousand');
    });
    it('100000 should be one lakh', () => {
      expect(pipe.transform(100000)).toMatch('one lakh');
    });
    it('1000000 should be ten lakh', () => {
      expect(pipe.transform(1000000)).toMatch('ten lakh');
    });
    it('10000000 should be one crore', () => {
      expect(pipe.transform(10000000)).toMatch('one crore');
    });
    it('100000000 should be ten crore', () => {
      expect(pipe.transform(100000000)).toMatch('ten crore');
    });
    it('1000000000 should be one arab', () => {
      expect(pipe.transform(1000000000)).toMatch('one arab');
    });
    it('10000000000 should be ten arab', () => {
      expect(pipe.transform(10000000000)).toMatch('ten arab');
    });
    it('100000000000 should be one kharab', () => {
      expect(pipe.transform(100000000000)).toMatch('one kharab');
    });
    it('1000000000000 should be ten kharab', () => {
      expect(pipe.transform(1000000000000)).toMatch('ten kharab');
    });
  });

  describe('100 to 999', () => {
    it('123 should be one hundred twenty three', () => {
      expect(pipe.transform(123)).toMatch('one hundred twenty three');
    });
    it('257 should be two hundred fifty seven', () => {
      expect(pipe.transform(257)).toMatch('two hundred fifty seven');
    });
    it('382 should be three hundred eighty two', () => {
      expect(pipe.transform(382)).toMatch('three hundred eighty two');
    });
    it('495 should be four hundred ninety five', () => {
      expect(pipe.transform(495)).toMatch('four hundred ninety five');
    });
    it('572 should be five hundred seventy two', () => {
      expect(pipe.transform(572)).toMatch('five hundred seventy two');
    });
    it('690 should be six hundred ninety', () => {
      expect(pipe.transform(690)).toMatch('six hundred ninety');
    });
    it('765 should be seven hundred sixty five', () => {
      expect(pipe.transform(765)).toMatch('seven hundred sixty five');
    });
    it('878 should be eight hundred seventy eight', () => {
      expect(pipe.transform(878)).toMatch('eight hundred seventy eight');
    });
    it('999 should be nine hundred ninety nine', () => {
      expect(pipe.transform(999)).toMatch('nine hundred ninety nine');
    });
  });

  describe('thousand to lakh', () => {
    it('1243 should be one thousand two hundred forty three', () => {
      expect(pipe.transform(1243)).toMatch('one thousand two hundred forty three');
    });

    it('3756 should be three thousand seven hundred fifty six', () => {
      expect(pipe.transform(3756)).toMatch('three thousand seven hundred fifty six');
    });

    it('57432 should be fifty seven thousand four hundred thirty two', () => {
      expect(pipe.transform(57432)).toMatch('fifty seven thousand four hundred thirty two');
    });

    it('987654 should be nine lakh eighty seven thousand six hundred fifty four', () => {
      expect(pipe.transform(987654))
        .toMatch('nine lakh eighty seven thousand six hundred fifty four');
    });
  });

  describe('lakh to crore', () => {
    it('1000003 should be ten lakh three', () => {
      expect(pipe.transform(1000003)).toMatch('ten lakh three');
    });

    it('13800264 should be one crore thirty eight lakh two hundred sixty four', () => {
      expect(pipe.transform(13800264))
        .toMatch('one crore thirty eight lakh two hundred sixty four');
    });

    const word = `ninety nine crore
                  ninety nine lakh
                  ninety nine thousand
                  nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(
      `999999999 should be ${word}`,
      () => {
        expect(pipe.transform(999999999)).toMatch(word);
      });
  });

  describe('arab to kharab', () => {
    const word1 = `one arab
                   twenty three crore
                   forty five lakh
                   sixty seven thousand eighty nine`.replace(/\s+/g, ' ');
    it(`1234567089 should be ${word1}`, () => {
      expect(pipe.transform(1234567089)).toMatch(word1);
    });

    const word2 = `fourteen arab
                   sixty crore
                   seven lakh
                   twenty eight thousand
                   one hundred ninety five`.replace(/\s+/g, ' ');
    it(`14600728195 should be ${word2}`, () => {
      expect(pipe.transform(14600728195)).toMatch(word2);
    });

    const word3 = `nine kharab
                   ninety nine arab
                   ninety nine crore
                   ninety nine lakh
                   ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(`999999999999 should be ${word3}`, () => {
      expect(pipe.transform(999999999999)).toMatch(word3);
    });

    const word4 = `ninety nine kharab
                   ninety nine arab
                   ninety nine crore
                   ninety nine lakh
                   ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
    it(`9999999999999 should be ${word4}`, () => {
      expect(pipe.transform(9999999999999)).toMatch(word4);
    });

    it(`10000000000000 should be empty`, () => {
      expect(pipe.transform(10000000000000)).toMatch('');
    });
  });

  fdescribe('Language', () => {
    describe('NP', () => {
      describe('0 - 10', () => {
        it('0 should be शून्य', () => {
          expect(pipe.transform(0, 'np')).toMatch('शून्य');
        });
        it('1 should be एक', () => {
          expect(pipe.transform(1, 'np')).toMatch('एक');
        });
        it('2 should be दुई', () => {
          expect(pipe.transform(2, 'np')).toMatch('दुई');
        });
        it('3 should be तीन', () => {
          expect(pipe.transform(3, 'np')).toMatch('तीन');
        });
        it('4 should be चार', () => {
          expect(pipe.transform(4, 'np')).toMatch('चार');
        });
        it('5 should be पाँच', () => {
          expect(pipe.transform(5, 'np')).toMatch('पाँच');
        });
        it('6 should be छ', () => {
          expect(pipe.transform(6, 'np')).toMatch('छ');
        });
        it('7 should be सात', () => {
          expect(pipe.transform(7, 'np')).toMatch('सात');
        });
        it('8 should be आठ', () => {
          expect(pipe.transform(8, 'np')).toMatch('आठ');
        });
        it('9 should be नौ', () => {
          expect(pipe.transform(9, 'np')).toMatch('नौ');
        });
        it('10 should be दश', () => {
          expect(pipe.transform(10, 'np')).toMatch('दश');
        });
      });

      describe('11 - 20', () => {
        it('11 should be एघार', () => {
          expect(pipe.transform(11, 'np')).toMatch('एघार');
        });
        it('12 should be बाह्र', () => {
          expect(pipe.transform(12, 'np')).toMatch('बाह्र');
        });
        it('13 should be तेह्र', () => {
          expect(pipe.transform(13, 'np')).toMatch('तेह्र');
        });
        it('14 should be चौध', () => {
          expect(pipe.transform(14, 'np')).toMatch('चौध');
        });
        it('15 should be पन्ध्र', () => {
          expect(pipe.transform(15, 'np')).toMatch('पन्ध्र');
        });
        it('16 should be सोह्र', () => {
          expect(pipe.transform(16, 'np')).toMatch('सोह्र');
        });
        it('17 should be सत्र', () => {
          expect(pipe.transform(17, 'np')).toMatch('सत्र');
        });
        it('18 should be अठार', () => {
          expect(pipe.transform(18, 'np')).toMatch('अठार');
        });
        it('19 should be उन्नाइस', () => {
          expect(pipe.transform(19, 'np')).toMatch('उन्नाइस');
        });
        it('20 should be बीस', () => {
          expect(pipe.transform(20, 'np')).toMatch('बीस');
        });
      });

      describe('21 - 30', () => {
        it('21 should be एक्काइस', () => {
          expect(pipe.transform(21, 'np')).toMatch('एक्काइस');
        });
        it('22 should be बाइस', () => {
          expect(pipe.transform(22, 'np')).toMatch('बाइस');
        });
        it('23 should be त्येइस', () => {
          expect(pipe.transform(23, 'np')).toMatch('त्येइस');
        });
        it('24 should be चौबीस', () => {
          expect(pipe.transform(24, 'np')).toMatch('चौबीस');
        });
        it('25 should be पच्चीस', () => {
          expect(pipe.transform(25, 'np')).toMatch('पच्चीस');
        });
        it('26 should be छब्बीस', () => {
          expect(pipe.transform(26, 'np')).toMatch('छब्बीस');
        });
        it('27 should be सत्ताइस', () => {
          expect(pipe.transform(27, 'np')).toMatch('सत्ताइस');
        });
        it('28 should be अठ्ठाइस', () => {
          expect(pipe.transform(28, 'np')).toMatch('अठ्ठाइस');
        });
        it('29 should be उनन्तीस', () => {
          expect(pipe.transform(29, 'np')).toMatch('उनन्तीस');
        });
        it('30 should be तीस', () => {
          expect(pipe.transform(30, 'np')).toMatch('तीस');
        });
      });

      describe('31 - 40', () => {
        it('31 should be एक्तीस', () => {
          expect(pipe.transform(31, 'np')).toMatch('एक्तीस');
        });
        it('32 should be बत्तीस', () => {
          expect(pipe.transform(32, 'np')).toMatch('बत्तीस');
        });
        it('33 should be तेत्तिस', () => {
          expect(pipe.transform(33, 'np')).toMatch('तेत्तिस');
        });
        it('34 should be चौंतीस', () => {
          expect(pipe.transform(34, 'np')).toMatch('चौंतीस');
        });
        it('35 should be पैंतीस', () => {
          expect(pipe.transform(35, 'np')).toMatch('पैंतीस');
        });
        it('36 should be छत्तीस', () => {
          expect(pipe.transform(36, 'np')).toMatch('छत्तीस');
        });
        it('37 should be सर्तीस', () => {
          expect(pipe.transform(37, 'np')).toMatch('सर्तीस');
        });
        it('38 should be अर्तीस', () => {
          expect(pipe.transform(38, 'np')).toMatch('अर्तीस');
        });
        it('39 should be उनन्चालीस', () => {
          expect(pipe.transform(39, 'np')).toMatch('उनन्चालीस');
        });
        it('40 should be चालीस', () => {
          expect(pipe.transform(40, 'np')).toMatch('चालीस');
        });
      });

      describe('41 - 50', () => {
        it('41 should be एकचालीस', () => {
          expect(pipe.transform(41, 'np')).toMatch('एकचालीस');
        });
        it('42 should be बयालीस', () => {
          expect(pipe.transform(42, 'np')).toMatch('बयालीस');
        });
        it('43 should be त्रिचालीस', () => {
          expect(pipe.transform(43, 'np')).toMatch('त्रिचालीस');
        });
        it('44 should be चवालीस', () => {
          expect(pipe.transform(44, 'np')).toMatch('चवालीस');
        });
        it('45 should be पैंतालीस', () => {
          expect(pipe.transform(45, 'np')).toMatch('पैंतालीस');
        });
        it('46 should be छयालीस', () => {
          expect(pipe.transform(46, 'np')).toMatch('छयालीस');
        });
        it('47 should be सर्चालीस', () => {
          expect(pipe.transform(47, 'np')).toMatch('सर्चालीस');
        });
        it('48 should be अर्चालीस', () => {
          expect(pipe.transform(48, 'np')).toMatch('अर्चालीस');
        });
        it('49 should be उनन्चास', () => {
          expect(pipe.transform(49, 'np')).toMatch('उनन्चास');
        });
        it('50 should be पचास', () => {
          expect(pipe.transform(50, 'np')).toMatch('पचास');
        });
      });

      describe('51 - 60', () => {
        it('51 should be एकाउन्न', () => {
          expect(pipe.transform(51, 'np')).toMatch('एकाउन्न');
        });
        it('52 should be बाउन्न', () => {
          expect(pipe.transform(52, 'np')).toMatch('बाउन्न');
        });
        it('53 should be त्रिपन्न', () => {
          expect(pipe.transform(53, 'np')).toMatch('त्रिपन्न');
        });
        it('54 should be चौवन्न', () => {
          expect(pipe.transform(54, 'np')).toMatch('चौवन्न');
        });
        it('55 should be पचपन्न', () => {
          expect(pipe.transform(55, 'np')).toMatch('पचपन्न');
        });
        it('56 should be छ्प्पन्न', () => {
          expect(pipe.transform(56, 'np')).toMatch('छ्प्पन्न');
        });
        it('57 should be सन्ताउन्न', () => {
          expect(pipe.transform(57, 'np')).toMatch('सन्ताउन्न');
        });
        it('58 should be अन्ठाउन्न', () => {
          expect(pipe.transform(58, 'np')).toMatch('अन्ठाउन्न');
        });
        it('59 should be उनान्साठ्ठी', () => {
          expect(pipe.transform(59, 'np')).toMatch('उनान्साठ्ठी');
        });
        it('60 should be साठ्ठी', () => {
          expect(pipe.transform(60, 'np')).toMatch('साठ्ठी');
        });
      });

      // describe('61 - 70', () => {
      //   it('61 should be एकाउन्न', () => {
      //     expect(pipe.transform(61, 'np')).toMatch('एकाउन्न');
      //   });
      //   it('62 should be बाउन्न', () => {
      //     expect(pipe.transform(62, 'np')).toMatch('बाउन्न');
      //   });
      //   it('63 should be त्रिपन्न', () => {
      //     expect(pipe.transform(63, 'np')).toMatch('त्रिपन्न');
      //   });
      //   it('64 should be चौवन्न', () => {
      //     expect(pipe.transform(64, 'np')).toMatch('चौवन्न');
      //   });
      //   it('65 should be पचपन्न', () => {
      //     expect(pipe.transform(65, 'np')).toMatch('पचपन्न');
      //   });
      //   it('66 should be छ्प्पन्न', () => {
      //     expect(pipe.transform(66, 'np')).toMatch('छ्प्पन्न');
      //   });
      //   it('67 should be सन्ताउन्न', () => {
      //     expect(pipe.transform(67, 'np')).toMatch('सन्ताउन्न');
      //   });
      //   it('68 should be अन्ठाउन्न', () => {
      //     expect(pipe.transform(68, 'np')).toMatch('अन्ठाउन्न');
      //   });
      //   it('69 should be उनान्साठ्ठी', () => {
      //     expect(pipe.transform(69, 'np')).toMatch('उनान्साठ्ठी');
      //   });
      //   it('70 should be साठ्ठी', () => {
      //     expect(pipe.transform(70, 'np')).toMatch('साठ्ठी');
      //   });
      // });

      // describe('71 - 80', () => {
      //   it('71 should be एकाउन्न', () => {
      //     expect(pipe.transform(71, 'np')).toMatch('एकाउन्न');
      //   });
      //   it('72 should be बाउन्न', () => {
      //     expect(pipe.transform(72, 'np')).toMatch('बाउन्न');
      //   });
      //   it('73 should be त्रिपन्न', () => {
      //     expect(pipe.transform(73, 'np')).toMatch('त्रिपन्न');
      //   });
      //   it('74 should be चौवन्न', () => {
      //     expect(pipe.transform(74, 'np')).toMatch('चौवन्न');
      //   });
      //   it('75 should be पचपन्न', () => {
      //     expect(pipe.transform(75, 'np')).toMatch('पचपन्न');
      //   });
      //   it('76 should be छ्प्पन्न', () => {
      //     expect(pipe.transform(76, 'np')).toMatch('छ्प्पन्न');
      //   });
      //   it('77 should be सन्ताउन्न', () => {
      //     expect(pipe.transform(77, 'np')).toMatch('सन्ताउन्न');
      //   });
      //   it('78 should be अन्ठाउन्न', () => {
      //     expect(pipe.transform(78, 'np')).toMatch('अन्ठाउन्न');
      //   });
      //   it('79 should be उनान्साठ्ठी', () => {
      //     expect(pipe.transform(79, 'np')).toMatch('उनान्साठ्ठी');
      //   });
      //   it('80 should be साठ्ठी', () => {
      //     expect(pipe.transform(80, 'np')).toMatch('साठ्ठी');
      //   });
      // });

      // describe('81 - 90', () => {
      //   it('81 should be एकाउन्न', () => {
      //     expect(pipe.transform(81, 'np')).toMatch('एकाउन्न');
      //   });
      //   it('82 should be बाउन्न', () => {
      //     expect(pipe.transform(82, 'np')).toMatch('बाउन्न');
      //   });
      //   it('83 should be त्रिपन्न', () => {
      //     expect(pipe.transform(83, 'np')).toMatch('त्रिपन्न');
      //   });
      //   it('84 should be चौवन्न', () => {
      //     expect(pipe.transform(84, 'np')).toMatch('चौवन्न');
      //   });
      //   it('85 should be पचपन्न', () => {
      //     expect(pipe.transform(85, 'np')).toMatch('पचपन्न');
      //   });
      //   it('86 should be छ्प्पन्न', () => {
      //     expect(pipe.transform(86, 'np')).toMatch('छ्प्पन्न');
      //   });
      //   it('87 should be सन्ताउन्न', () => {
      //     expect(pipe.transform(87, 'np')).toMatch('सन्ताउन्न');
      //   });
      //   it('88 should be अन्ठाउन्न', () => {
      //     expect(pipe.transform(88, 'np')).toMatch('अन्ठाउन्न');
      //   });
      //   it('89 should be उनान्साठ्ठी', () => {
      //     expect(pipe.transform(89, 'np')).toMatch('उनान्साठ्ठी');
      //   });
      //   it('90 should be साठ्ठी', () => {
      //     expect(pipe.transform(90, 'np')).toMatch('साठ्ठी');
      //   });
      // });

      // describe('91 - 100', () => {
      //   it('91 should be एकाउन्न', () => {
      //     expect(pipe.transform(91, 'np')).toMatch('एकाउन्न');
      //   });
      //   it('92 should be बाउन्न', () => {
      //     expect(pipe.transform(92, 'np')).toMatch('बाउन्न');
      //   });
      //   it('93 should be त्रिपन्न', () => {
      //     expect(pipe.transform(93, 'np')).toMatch('त्रिपन्न');
      //   });
      //   it('94 should be चौवन्न', () => {
      //     expect(pipe.transform(94, 'np')).toMatch('चौवन्न');
      //   });
      //   it('95 should be पचपन्न', () => {
      //     expect(pipe.transform(95, 'np')).toMatch('पचपन्न');
      //   });
      //   it('96 should be छ्प्पन्न', () => {
      //     expect(pipe.transform(96, 'np')).toMatch('छ्प्पन्न');
      //   });
      //   it('97 should be सन्ताउन्न', () => {
      //     expect(pipe.transform(97, 'np')).toMatch('सन्ताउन्न');
      //   });
      //   it('98 should be अन्ठाउन्न', () => {
      //     expect(pipe.transform(98, 'np')).toMatch('अन्ठाउन्न');
      //   });
      //   it('99 should be उनान्साठ्ठी', () => {
      //     expect(pipe.transform(99, 'np')).toMatch('उनान्साठ्ठी');
      //   });
      //   it('100 should be साठ्ठी', () => {
      //     expect(pipe.transform(100, 'np')).toMatch('साठ्ठी');
      //   });
      // });

      describe('100 - 999', () => {
        it('121 should be एक सय एक्काइस', () => {
          expect(pipe.transform(121, 'np')).toMatch('एक सय एक्काइस');
        });
      });

    });
  });
});
