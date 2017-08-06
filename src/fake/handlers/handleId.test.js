import test from 'ava'

import handleId from './handleId'

let rootValue
let entityMap

test.beforeEach(() => {
  rootValue = {}
  entityMap = {}
})

test('handleId returns an id when the type is id', t => {
  const result = handleId('id', rootValue, entityMap)

  t.true(typeof result === 'number')
})

test('handleId returns the parent id for a matching foreign key', t => {
  const parent = {
    __typeName: 'parentEntity',
    id: 12345,
  }
  rootValue = { __typeName: 'childEntity' }
  entityMap = {
    childEntity: {
      __typeName: 'childEntity',
      parent,
    },
  }
  const result = handleId('parentEntityId', rootValue, entityMap)

  t.is(result, parent.id)
})

test('handleId returns an id when the type is unrecognized', t => {
  const result = handleId('someotherId', rootValue, entityMap)

  t.true(typeof result === 'number')
})
