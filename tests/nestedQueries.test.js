import test from 'ava'

import nestedQuery from './fixtures/nestedQuery'

import mock from '../src/index'

test('it can mock a nested query', t => {
  const result = mock(nestedQuery)

  t.true(typeof result.id === 'number')
  t.true(typeof result.name === 'string')
  t.true(typeof result.email === 'string')
  t.true(typeof result.location === 'string')
  t.true(typeof result.avatar === 'object')
  t.true(typeof result.avatar.id === 'number')
  t.true(typeof result.avatar.url === 'string')
})

test('it can pluck a child from a nested query', t => {
  const result = mock(nestedQuery, 'user.avatar')

  t.true(typeof result.id === 'number')
  t.true(typeof result.url === 'string')
})

test('it can assign a foreign key to a child that matches the parent id', t => {
  const result = mock(nestedQuery)

  t.is(result.id, result.avatar.userId)
})

test('it can assign a random foreign key to a child when the foreign key is not for parent', t => {
  const result = mock(nestedQuery)

  t.true(typeof result.avatar.anotherId === 'number')
})
