import gql from 'graphql-tag'

export default gql`
  query GetUsers {
    users {
      id
      name
      email
      location
    }
  }
`
