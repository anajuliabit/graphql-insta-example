import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    name: String
  }

  type Query {
    users: [User]!
    user(id: ID!): User
  }

  input CreateUser {
    username: String!
    name: String!
  }

  type Mutation {
    createUser(user: CreateUser!): User
  }
`;
