import { isEmpty } from 'lodash-es'

import fake from './fake'

const createLeafValue = (fieldName, rootValue, entityMap) => {
  const leafValue = fake(fieldName, rootValue, entityMap)
  const entityKey = rootValue.__typeName || 'unknown'
  if (!entityMap[entityKey]) entityMap[entityKey] = {}
  entityMap[entityKey][fieldName] = leafValue

  return isEmpty(rootValue)
    ? Object.assign(entityMap[entityKey], { [fieldName]: leafValue })
    : leafValue
}

export default createLeafValue
