const assert = require('assert');
const { formatName } = require('../index');

describe('index.js', function() {
  it('returns a string', function() {
    assert.strictEqual(typeof formatName('SEBASTIAN'), 'string');
  })

  it('returns a properly formated capitalized name', function() {
    assert.strictEqual(formatName('SEBASTIAN'), 'Sebastian');
    assert.strictEqual(formatName('sebastian'), 'Sebastian');
    assert.strictEqual(formatName('sEbAsTiAn'), 'Sebastian');
  })
})
