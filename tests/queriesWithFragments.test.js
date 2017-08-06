import test from 'ava'

import { isNumber, isObject, isString, isUrl } from './matchers'
import queryWithFragments from './fixtures/queryWithFragments'

import mock from '../src/index'

test('it can mock a query with a nested fragment', t => {
  const { avatar } = mock(queryWithFragments)

  t.true(isObject(avatar))
  t.true(isNumber(avatar.id))
  t.true(isUrl(avatar.url))
})

test('it can mock a query with a nested list fragment', t => {
  const result = mock(queryWithFragments)

  t.true(Array.isArray(result.friends))

  const friend = result.friends[0]

  t.true(isNumber(friend.id))
  t.true(isString(friend.name))
})

test('it can mock a fragment nested within a fragment', t => {
  const result = mock(queryWithFragments)
  const { avatar } = result.friends[0]

  t.true(isNumber(avatar.id))
  t.true(isUrl(avatar.url))
})
