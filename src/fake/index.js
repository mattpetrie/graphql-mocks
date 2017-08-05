import { isEmail, isId, isName } from '../matchers'
import fakes from './fakes'

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
  return fakes[type] ? fakes[type]() : fakes.string()
}

export default fake
