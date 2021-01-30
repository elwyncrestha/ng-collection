import { TrimLeadingZerosPipe } from './trim-leading-zeros.pipe';

describe('TrimLeadingZerosPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimLeadingZerosPipe();
    expect(pipe).toBeTruthy();
  });
});
