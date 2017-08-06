import fakes from '../fakes'

const handleId = (field, rootValue = {}, entityMap) => {
  if (field === 'id') return fakes.id() // short-circuit if the field is just 'id'
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

export default handleId
