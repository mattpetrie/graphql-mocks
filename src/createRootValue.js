import { isPlural } from './matchers'

const createArray = rootValue => Array.from(Array(3)).map(() => rootValue)

const createRootValue = fieldName => {
  const rootValue = { __typeName: fieldName }
  if (isPlural(fieldName)) return createArray(rootValue)
  return rootValue
}

export default createRootValue
