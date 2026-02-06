
export const CREATE_USER_MUTATION = `mutation CreateUser($newUserInput: NewUserInput) {
  createUser(newUserInput: $newUserInput) {
    token
    user {
      firstName
      createdAt
      email
      id
      lastName
      updatedAt
      userName
    }
  }
}`

export const LOGIN_USER_MUTATION = `mutation LoginUser($credentialsInput: CredentialsInput) {
  loginUser(credentialsInput: $credentialsInput) {
    token
    user {
      id
      userName
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
}`