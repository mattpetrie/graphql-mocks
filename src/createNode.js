import createRootValue from './createRootValue'

const createNode = (fieldName, rootValue, entityMap) => {
  entityMap[fieldName] = {
    __typeName: fieldName,
    parent: entityMap[rootValue.__typeName],
  }
  return createRootValue(fieldName)
}

export default createNode
