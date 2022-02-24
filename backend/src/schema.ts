const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String
    email: String!
    phoneNumber: String
    password: String!
  }

  input InputUser {
    firstName: String!
    lastName: String
    email: String!
    phoneNumber: String
    password: String!
  }

  type Query {
    allUsers: [User]
  }

  type Mutation {
    createUser(InputUser: InputUser): User!
  }
`

export = {
  typeDefs,
}
