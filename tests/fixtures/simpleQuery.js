import gql from 'graphql-tag'

export default gql`
  query GetUser {
    user {
      id
      firstName
      lastName
      email
      location
      int
    }
  }
`
