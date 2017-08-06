import gql from 'graphql-tag'

const avatarFragment = gql`
  fragment userAvatar on Avatar {
    id
    url
  }
`

const friendsFragment = gql`
  fragment friends on User {
    friends {
      id
      name
      avatar {
        ...userAvatar
      }
    }
  }
  ${avatarFragment}
`

export default gql`
  query GetUser {
    user {
      id
      name
      email
      location
      avatar {
        ...userAvatar
      }
      ...friends
    }
  }
  ${avatarFragment}
  ${friendsFragment}
`
