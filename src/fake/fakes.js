import faker from './flatFaker'

// Here we define custom types that are not included in Faker
const fakes = Object.assign({}, faker, {
  id: faker.number,
  int: faker.number,
  string: faker.phrase,
})

export default fakes
