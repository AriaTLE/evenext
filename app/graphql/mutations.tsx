
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