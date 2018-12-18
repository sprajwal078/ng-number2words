import { ToWordsPipe } from './to-words.pipe';

describe('ToWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new ToWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
