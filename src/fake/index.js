import { isEmail, isId, isName } from '../matchers'
import handleId from './handlers/handleId'
import handleName from './handlers/handleName'
import fakes from './fakes'

const fake = (type, rootValue, entityMap) => {
  if (isId(type)) return handleId(type, rootValue, entityMap)
  if (isEmail(type)) return fakes.email()
  if (isName(type)) return handleName(type)
  return fakes[type] ? fakes[type]() : fakes.string()
}

export default fake
