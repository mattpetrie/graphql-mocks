import createLeafValue from './createLeafValue'
import createNode from './createNode'

const entityMap = {}

const resolver = (fieldName, rootValue = {}, _, __, { isLeaf }) => {
  if (!isLeaf) return createNode(fieldName, rootValue, entityMap)

  return createLeafValue(fieldName, rootValue, entityMap)
}

export default resolver
