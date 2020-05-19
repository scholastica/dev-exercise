const expect = require('chai').expect;
const Example = require('../lib/example.js');

describe('can run a test', () => {
  it('works', () => {
    const example = new Example();
    const value = example.run('hello');
    expect(value).to.eql('hello');
  });
});
