import test from 'ava'

import { isEmail, isNumber, isString } from './matchers'
import simpleQuery from './fixtures/simpleQuery'
import queryWithArgs from './fixtures/queryWithArgs'

import mock from '../src/index'

test('it can mock a simple query', t => {
  const result = mock(simpleQuery)

  t.true(isNumber(result.id))
  t.true(isString(result.firstName))
  t.true(isString(result.lastName))
  t.true(isEmail(result.email))
  t.true(isString(result.location))
  t.true(isNumber(result.int))
})

test('it can mock a query that takes arguments', t => {
  const result = mock(queryWithArgs)

  t.true(isNumber(result.id))
  t.true(isString(result.name))
  t.true(isEmail(result.email))
  t.true(isString(result.location))
})
