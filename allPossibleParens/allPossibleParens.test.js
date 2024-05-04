const allPossibleParens = require('./allPossibleParens');
const mocks= require('./mocks');

describe.only('allPossibleParens',()=>{
  it('should pass for 1',()=>{
    expect(allPossibleParens(mocks.one)).toEqual(mocks.solutionOne);
  })
})