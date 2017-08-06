import faker from 'faker'
import flatten from 'flat'
import { omit, reduce } from 'lodash-es'

const removeDelimeter = key => /\w+$/.exec(key)[0]

/*
  Faker helpfully organizes everything under different category keys,
  but we want to be able to just look up by fake type at the top level.
  Locales is a configuration object so it can be removed.
*/
const flatFaker = reduce(
  flatten(omit(faker, 'locales')),
  (result, value, key) =>
    Object.assign(result, { [removeDelimeter(key)]: value }),
  {}
)

export default flatFaker
