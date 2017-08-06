import test from 'ava'
import sinon from 'sinon'

import fake from './index'

const fakesStub = {
  email: sinon.stub().returns('an email'),
  string: sinon.stub().returns('a string'),
  testType: sinon.stub().returns('the test type'),
}
const handleIdStub = sinon.stub().returns('an id')
const handleNameStub = sinon.stub().returns('a name')
const isEmailStub = sinon.stub()
const isIdStub = sinon.stub()
const isNameStub = sinon.stub()

const rootValue = {}
const entityMap = {}

test.beforeEach(() => {
  fake.__set__({
    fakes: fakesStub,
    handleId: handleIdStub,
    handleName: handleNameStub,
    isEmail: isEmailStub,
    isId: isIdStub,
    isName: isNameStub,
  })
})

test('fake returns an id when the type is an id', t => {
  isIdStub.withArgs('id').returns(true)
  const result = fake('id', rootValue, entityMap)

  t.true(handleIdStub.calledWith('id', rootValue, entityMap))
  t.is(result, 'an id')
})

test('fake returns an email when the type is an email', t => {
  isEmailStub.withArgs('email').returns(true)
  const result = fake('email', rootValue, entityMap)

  t.is(result, 'an email')
})

test('fake returns a name when the type is a name', t => {
  isNameStub.withArgs('name').returns(true)
  const result = fake('name', rootValue, entityMap)

  t.true(handleNameStub.calledWith('name'))
  t.is(result, 'a name')
})

test('fake returns a fake when no handler matches but a fake type does', t => {
  const result = fake('testType', rootValue, entityMap)

  t.is(result, 'the test type')
})

test('fake returns a string name when no fake type matches', t => {
  const result = fake('foo', rootValue, entityMap)

  t.is(result, 'a string')
})
