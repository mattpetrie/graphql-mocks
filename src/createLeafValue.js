import fake from './fake'

const createLeafValue = (fieldName, rootValue, entityMap) => {
  const leafValue = fake(fieldName, rootValue, entityMap)
  if (entityMap[rootValue.__typeName]) {
    entityMap[rootValue.__typeName][fieldName] = leafValue
  }

  return leafValue
}

export default createLeafValue
