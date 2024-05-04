const allAnagrams = require('./allAnagrams');
const mock = require('./mocks');

describe('allAnagrams', () => {
  it('passes for input \'abc\' ', () => {
    expect(allAnagrams(mock.mock1)).toEqual(mock.mock1Solution);
  });
});
