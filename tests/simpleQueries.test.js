import test from 'ava'

import simpleQuery from './fixtures/simpleQuery'
import queryWithArgs from './fixtures/queryWithArgs'

import mock from '../src/index'

test('it can mock a simple query', t => {
  const result = mock(simpleQuery)

  t.true(typeof result.id === 'number')
  t.true(typeof result.firstName === 'string')
  t.true(typeof result.lastName === 'string')
  t.true(typeof result.email === 'string')
  t.true(typeof result.location === 'string')
  t.true(typeof result.int === 'number')
})

test('it can mock a query that takes arguments', t => {
  const result = mock(queryWithArgs)

  t.true(typeof result.id === 'number')
  t.true(typeof result.name === 'string')
  t.true(typeof result.email === 'string')
  t.true(typeof result.location === 'string')
})
