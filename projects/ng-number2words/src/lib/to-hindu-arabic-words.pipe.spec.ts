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
});
