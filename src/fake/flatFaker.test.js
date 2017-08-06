import test from 'ava'

import flatFaker from './flatFaker'

test('flatFaker exports a flattened object with all of the Faker types', t => {
  t.true(typeof flatFaker.number() === 'number')
  t.true(typeof flatFaker.lastName() === 'string')
  t.true(typeof flatFaker.url() === 'string')
  t.true(typeof flatFaker.fileName() === 'string')
  t.true(typeof flatFaker.phrase() === 'string')
})
