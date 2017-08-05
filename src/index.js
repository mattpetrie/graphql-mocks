import graphql from 'graphql-anywhere'
import { get } from 'lodash-es'

import createResolver from './createResolver'

const createMock = (query, path = '') => {
  const entityMap = {}
  const resolver = createResolver(entityMap)
  const result = graphql(resolver, query)
  return path ? get(result, path) : result[Object.keys(result)[0]]
}

export default createMock
