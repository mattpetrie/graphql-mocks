import faker from 'faker'

const fakes = {
  id: faker.random.number,
  email: faker.internet.email,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  int: faker.random.number,
  string: faker.hacker.phrase,
}

export default fakes
