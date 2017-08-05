import graphql from 'graphql-anywhere'
import { get } from 'lodash'

import resolver from './resolver'

const createMock = (query, path = '') => {
  const result = graphql(resolver, query)
  return path ? get(result, path) : result[Object.keys(result)[0]]
}

export default createMock
