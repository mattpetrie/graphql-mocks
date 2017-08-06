import test from 'ava'

import { isEmail, isNumber, isObject, isString, isUrl } from './matchers'
import nestedQuery from './fixtures/nestedQuery'

import mock from '../src/index'

test('it can mock a nested query', t => {
  const result = mock(nestedQuery)

  t.true(isNumber(result.id))
  t.true(isString(result.name))
  t.true(isEmail(result.email))
  t.true(isString(result.location))
  t.true(isObject(result.avatar))
  t.true(isNumber(result.avatar.id))
  t.true(isUrl(result.avatar.url))
})

test('it can pluck a child from a nested query', t => {
  const result = mock(nestedQuery, 'user.avatar')

  t.true(isNumber(result.id))
  t.true(isUrl(result.url))
  t.true(typeof result.url === 'string')
})

test('it can assign a foreign key to a child that matches the parent id', t => {
  const result = mock(nestedQuery)

  t.is(result.id, result.avatar.userId)
})

test('it can assign a random foreign key to a child when the foreign key is not for parent', t => {
  const { avatar } = mock(nestedQuery)

  t.true(isNumber(avatar.anotherId))
})
