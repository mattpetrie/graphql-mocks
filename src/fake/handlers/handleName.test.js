import test from 'ava'
import sinon from 'sinon'

import handleName from './handleName'

const fakesStub = {
  firstName: sinon.stub().returns('first name'),
  lastName: sinon.stub().returns('last name'),
}

test.beforeEach(() => {
  handleName.__set__({
    fakes: fakesStub,
  })
})

test('handleName returns a first name when appropriate', t => {
  const result = handleName('firstName')

  t.is(result, 'first name')
})

test('handleName returns a last name when appropriate', t => {
  const result = handleName('lastName')

  t.is(result, 'last name')
})

test('handleName returns a full name for all other cases', t => {
  const result = handleName('somename')

  t.is(result, 'first name last name')
})
