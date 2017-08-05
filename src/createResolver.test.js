import test from 'ava'
import sinon from 'sinon'

import createResolver from './createResolver'

const entityMapStub = 'the entity map'

const createNodeStub = sinon.stub().returns('the node')
const createLeafValueStub = sinon.stub().returns('the leaf value')
let resolver

test.beforeEach(() => {
  createResolver.__set__({
    createNode: createNodeStub,
    createLeafValue: createLeafValueStub,
  })

  resolver = createResolver(entityMapStub)
})

test('createResolver returns the created node when the field is not a leaf', t => {
  const result = resolver('foo', 'rootValue', null, null, { isLeaf: false })

  t.true(createNodeStub.calledWith('foo', 'rootValue', entityMapStub))
  t.is(result, 'the node')
})

test('createResolver returns the created leaf value when the field is a leaf', t => {
  const result = resolver('foo', 'rootValue', null, null, { isLeaf: true })

  t.true(createLeafValueStub.calledWith('foo', 'rootValue', entityMapStub))
  t.is(result, 'the leaf value')
})
