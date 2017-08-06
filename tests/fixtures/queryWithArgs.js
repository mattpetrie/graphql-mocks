import gql from 'graphql-tag'

export default gql`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      name
      email
      location
    }
  }
`
