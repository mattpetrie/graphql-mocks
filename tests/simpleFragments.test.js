import test from 'ava'

import { isEmail, isNumber, isString } from './matchers'
import simpleFragment from './fixtures/simpleFragment'

import mock from '../src/index'

test('it can mock a simple fragment', t => {
  const result = mock(simpleFragment)

  t.true(isNumber(result.id))
  t.true(isString(result.name))
  t.true(isEmail(result.email))
  t.true(isString(result.location))
})
