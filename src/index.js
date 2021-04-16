import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";

let users = [
  { id: "1", name: "Ana", username: "anajuliabit" },
  { id: "2", name: "Rafa", username: "rafaballerini" },
];

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => {
      return users.find((user) => user.id === args.id);
    },
  },

  Mutation: {
    createUser: (_, args) => {
      console.log(args);
      const id = users.length + 1;
      const user = { id: id.toString(), ...args.user };
      users = [...users, user];
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => console.log(url));
