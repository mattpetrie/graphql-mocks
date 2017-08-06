import test from 'ava'

import simpleFragment from './fixtures/simpleFragment'

import mock from '../src/index'

test('it can mock a simple fragment', t => {
  const result = mock(simpleFragment)

  t.true(typeof result.id === 'number')
  t.true(typeof result.name === 'string')
  t.true(typeof result.email === 'string')
  t.true(typeof result.location === 'string')
})
