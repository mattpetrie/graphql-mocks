import { isPlural } from './matchers'

const createArray = rootValue => Array.from(Array(3)).map(() => rootValue)

const createRootValue = entityName => {
  const rootValue = { __typeName: entityName }
  if (isPlural(entityName)) return createArray(rootValue)
  return rootValue
}

export default createRootValue
