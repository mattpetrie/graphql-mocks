import test from 'ava'
import sinon from 'sinon'

import createNode from './createNode'

const createRootValueStub = sinon.stub().returns('the root value')
let entityMapStub

test.beforeEach(() => {
  createNode.__set__({
    createRootValue: createRootValueStub,
  })
  entityMapStub = {
    bar: 'bar',
  }
})

test('createNode returns the correct root value for the node', t => {
  const result = createNode('foo', { __typeName: 'bar' }, entityMapStub)

  t.true(createRootValueStub.calledWith('foo'))
  t.is(result, 'the root value')
})

test('createNode creates the node in the entity map', t => {
  createNode('foo', { __typeName: 'bar' }, entityMapStub)

  t.deepEqual(entityMapStub, {
    bar: 'bar',
    foo: {
      __typeName: 'foo',
      parent: 'bar',
    },
  })
})
