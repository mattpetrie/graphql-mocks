import test from 'ava'
import sinon from 'sinon'

import createLeafValue from './createLeafValue'

const fakeStub = sinon.stub().returns('the fake value')
let entityMapStub

test.beforeEach(() => {
  createLeafValue.__set__({
    fake: fakeStub,
  })
  entityMapStub = {
    foo: {
      __typeName: 'foo',
    },
  }
})

test('createLeafValue returns the correct value for the leaf', t => {
  const result = createLeafValue('attr', { __typeName: 'foo' }, entityMapStub)

  t.true(fakeStub.calledWith('attr'))
  t.is(result, 'the fake value')
})

test('createNode creates the node in the entity map', t => {
  createLeafValue('attr', { __typeName: 'foo' }, entityMapStub)

  t.deepEqual(entityMapStub, {
    foo: {
      __typeName: 'foo',
      attr: 'the fake value',
    },
  })
})
