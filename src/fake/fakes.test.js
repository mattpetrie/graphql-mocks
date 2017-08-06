import test from 'ava'

import fakes from './fakes'

test('fakes includes all of the faker types', t => {
  t.true(typeof fakes.number() === 'number')
  t.true(typeof fakes.lastName() === 'string')
  t.true(typeof fakes.url() === 'string')
  t.true(typeof fakes.fileName() === 'string')
  t.true(typeof fakes.phrase() === 'string')
})

test('fakes extends faker with custom types', t => {
  t.true(typeof fakes.id() === 'number')
  t.true(typeof fakes.int() === 'number')
  t.true(typeof fakes.string() === 'string')
})
