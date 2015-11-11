import test from 'tape'

import isGenerator from '../src'

test('It should pass when', t => {
  function * gen () {}
  t.equal(isGenerator(gen), true, 'called with generator')
  t.end()
})

test('It should fail when', t => {
  const noop = function () {}
  t.equal(isGenerator(null), false, 'called with null')
  t.equal(isGenerator(undefined), false, 'called with undefined')
  t.equal(isGenerator(noop), false, 'called with a function')
  t.equal(isGenerator([]), false, 'called with an Array')
  t.equal(isGenerator({}), false, 'called with an object')
  t.equal(isGenerator('str'), false, 'called with a string')
  t.equal(isGenerator(new Promise(noop, noop)), false, 'called with a Promise')
  t.end()
})
