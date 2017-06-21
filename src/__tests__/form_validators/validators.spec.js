/* eslint no-undef: 0 */
import { alpha, empty } from '../../form_validations/validators';

// TODO Need to be refactored according to validators refactoring

describe(('Test alpha validator'), () => {
  it('should validate alpha string', () => {
    const ok = alpha('Alpha');
    expect(ok).toBe(undefined);
  });
  it('should invalidate alpha string', () => {
    const ko = alpha('Alpha8 num string42');
    expect(ko).toEqual('Only alpha character accepted');
  });
});

describe(('Test empty validator'), () => {
  it('should validate non empty string', () => {
    const ok = empty('Alpa string');
    expect(ok).toBe(undefined);
  });
  it('should invalidate empty string', () => {
    const ko = empty('');
    expect(ko).toEqual('Empty values not allowed');
  });
  it('should invalidate non trimed empty string', () => {
    const ko = empty('  ');
    expect(ko).toEqual('Empty values not allowed');
  });
});
