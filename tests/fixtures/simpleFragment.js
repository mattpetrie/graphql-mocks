import gql from 'graphql-tag'

export default gql`
  fragment profile on User {
    id
    name
    email
    location
  }
`
