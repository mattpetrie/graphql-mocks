import test from 'ava'

import { isEmail, isNumber, isString } from './matchers'
import listQuery from './fixtures/listQuery'

import mock from '../src/index'

test('it can mock a list query', t => {
  const result = mock(listQuery)

  t.true(Array.isArray(result))

  const firstResult = result[0]

  t.true(isNumber(firstResult.id))
  t.true(isString(firstResult.name))
  t.true(isEmail(firstResult.email))
  t.true(isString(firstResult.location))
})
