import { isLuca } from './utils';

describe('isLuca', () => {
  it('should return false if no user', () => {
    expect(isLuca(null)).toEqual(false);
  });

  it('should work', () => {
    expect(isLuca({ id: '1', name: 'Luca' })).toEqual(true);
    expect(isLuca({ id: '1', name: 'Lucas' })).toEqual(false);
  });
});
