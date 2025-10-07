import { isWithinUploadLimit } from '../app/utils/media';

describe('isWithinUploadLimit', () => {
  it('returns true for image under limit', () => {
    expect(isWithinUploadLimit(4 * 1024 * 1024, 'image')).toBe(true);
  });

  it('returns false for video over limit', () => {
    expect(isWithinUploadLimit(60 * 1024 * 1024, 'video')).toBe(false);
  });
});
