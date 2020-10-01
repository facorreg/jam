import { gql } from '@apollo/client';

const register = gql`
  mutation register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
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

export default register;
