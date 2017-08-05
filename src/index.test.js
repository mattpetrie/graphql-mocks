import test from 'ava'
import sinon from 'sinon'

import createMock from './index'

const testEntity = {
  id: '1234',
  nestedEntity: {
    id: '5678',
  },
}

const graphqlStub = sinon.stub().returns({ testEntity })

const resolverStub = 'the resolver'
const createResolverStub = sinon.stub().returns(resolverStub)
const queryStub = 'the query'

test.beforeEach(() => {
  createMock.__set__({
    createResolver: createResolverStub,
    graphql: graphqlStub,
  })
})

test('createMock calls graphql with correct arguments', t => {
  createMock(queryStub)
  t.true(graphqlStub.calledWith(resolverStub, queryStub))
})

test('createMock when no path is given returns the top level key of the result', t => {
  const result = createMock(queryStub)
  t.is(result, testEntity)
})

test('createMock when a path is given returns the correct key in result', t => {
  const result = createMock(queryStub, 'testEntity.nestedEntity')
  t.is(result, testEntity.nestedEntity)
})
