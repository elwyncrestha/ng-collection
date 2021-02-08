import { SafePipe } from './safe.pipe';

const domSanitizer = jasmine.createSpyObj('DomSanitizer', [
  'bypassSecurityTrustHtml',
  'bypassSecurityTrustStyle',
  'bypassSecurityTrustScript',
  'bypassSecurityTrustUrl',
  'bypassSecurityTrustResourceUrl',
]);

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
