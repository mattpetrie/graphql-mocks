# graphql-mocks

> Effortlessly create random mock data from your graphql queries - no schema required!

When doing unit testing in Javascript, frequently you need to create mock objects for entities in your app. When building a client GraphQL app with a component-based framework such as React, frequently your GraphQL queries and/or fragments map directly to the data a specific component will consume. `graphql-mocks` combines these concepts together, to automatically create mock data objects with the exact right shape for testing your components.

## Example
Given a GraphQL query like:
```graphql
query GetUser($id: Int!) {
  user(id: $id) {
    firstName
    lastName
    email
  }
}
```

Passing the query to `graphql-mock`:
```javascript
import mock from 'graphql-mock'

cont mockEntity = mock(query)
```

Will return a mock object:
```javascript
{
  firstName: "Jane",
  lastName: "Doe",
  email: "test@example.com"
}
```

Which you can use in your tests:

```javascript
// UserProfile.js - a React component
const UserProfile = ({ firstName, lastName, email }) => (
  <section>
    <div className="first-name">First Name: {firstName}</div>
    <div className="last-name">Last Name: {lastName}</div>
    <div className="email">Email: {email}</div>
  </section>
)

// UserProfile.test.js - using enzyme.js and expect.js
import mock from 'graphql-mock'
import getUser from './queries/getUser.graphql'
import UserProfile from './components/UserProfile'

it('Renders the user data', () => {
  const mockUser = mock(getUser)
  const wrapper = shallow(<UserProfile user={mockUser} />)

  expect(wrapper.find('div.first-name').text()).to.be(mockUser.firstName)
  expect(wrapper.find('div.last-name').text()).to.be(mockUser.lastName)
  expect(wrapper.find('div.email').text()).to.be(mockUser.email)
})

```

## API

```javascript
import mock from 'graphql-mocks'

const mockEntity = mock(query, path?)
```

* `query : GraphQL`: A GraphQL query or fragment as generated from [graphql-tag](https://github.com/apollographql/graphql-tag)
* `path : String`: A path to the desired key of the returned object. By default, graphql-mocks returns the top-level entity from the query, but sometimes you may want to mock a nested entity or only a specific property:
  ```javascript
  const query = gql`
    entity {
      id
      name
      nestedEntity {
        id
        email
      }
    }
  `

  const mockNestedEntity = mock(query 'entity.nestedEntity')

  /*
    mockNestedEntity === {
      id: 12345,
      email: 'test@example.com'
    }
  */
  ```

## Roadmap

* API for applying arguments from query
* API for passing in custom mock values or mock factories for specific fields
* API for passing in a GraphQL schema for custom type definitions
* Better inference of types from field names

## Contributing

Found a bug, or have a suggested feature or improvement? Open an [issue](https://github.com/mattpetrie/graphql-mocks/issues)

## License

MIT
