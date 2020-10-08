import { gql } from '@apollo/client';

const loginMutation = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        id
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }`;

export default loginMutation;
