import test from 'ava'

import listQuery from './fixtures/listQuery'

import mock from '../src/index'

test('it can mock a list query', t => {
  const result = mock(listQuery)

  t.true(Array.isArray(result))

  const firstResult = result[0]

  t.true(typeof firstResult.id === 'number')
  t.true(typeof firstResult.name === 'string')
  t.true(typeof firstResult.email === 'string')
  t.true(typeof firstResult.location === 'string')
})
