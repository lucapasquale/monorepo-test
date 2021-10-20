import { isLuca } from './utils';

describe('isLuca', () => {
  it('should work', () => {
    expect(isLuca({ id: '1', name: 'Luca' })).toEqual(true);
    expect(isLuca({ id: '1', name: 'Lucas' })).toEqual(false);
  });
});
