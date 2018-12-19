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
});
