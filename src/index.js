import graphql from 'graphql-anywhere'
import faker from 'faker'
import { get } from 'lodash'

const fakes = {
  id: faker.random.number,
  email: faker.internet.email,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  int: faker.random.number,
  string: faker.hacker.phrase,
}

const isPlural = name => name.match(/.*s$/)

const isEmail = fieldName => fieldName.match(/email/i)
const isId = fieldName => fieldName.match(/id/i)
const isName = fieldName => fieldName.match(/name/i)

const handleId = (field, rootValue = {}, entityMap) => {
  if (field === 'id') return fakes.id()
  const currentEntity = entityMap[rootValue.__typeName] || {}
  const entityFromId = field.match(/.*(?=id)/i)[0]
  if (
    currentEntity.parent &&
    currentEntity.parent.__typeName === entityFromId
  ) {
    return currentEntity.parent.id
  }
  return fakes.id()
}

const handleName = name => {
  if (name.match(/first/i)) return fakes.firstName()
  if (name.match(/last/i)) return fakes.lastName()
  return `${fakes.firstName()} ${fakes.lastName()}`
}

const fake = (type, rootValue, entityMap) => {
  if (isId(type)) return handleId(type, rootValue, entityMap)
  if (isEmail(type)) return fakes.email()
  if (isName(type)) return handleName(type)
  return fakes[type] ? fakes[type]() : faker.hacker.phrase()
}

const createRootValue = fieldName => {
  const rootValue = { __typeName: fieldName }
  if (isPlural(fieldName)) return [rootValue, rootValue, rootValue]
  return rootValue
}

const createNode = (fieldName, rootValue, entityMap) => {
  entityMap[fieldName] = {
    __typeName: fieldName,
    parent: entityMap[rootValue.__typeName],
  }
  return createRootValue(fieldName)
}

const createLeafValue = (fieldName, rootValue, entityMap) => {
  const leafValue = fake(fieldName, rootValue, entityMap)
  if (entityMap[rootValue.__typeName]) {
    entityMap[rootValue.__typeName][fieldName] = leafValue
  }

  return leafValue
}

const entityMap = {}

const resolver = (fieldName, rootValue = {}, _, __, { isLeaf }) => {
  if (!isLeaf) return createNode(fieldName, rootValue, entityMap)

  return createLeafValue(fieldName, rootValue, entityMap)
}

const createMock = (query, path = '') => {
  const result = graphql(resolver, query)
  return path ? get(result, path) : result[Object.keys(result)[0]]
}

export default createMock
