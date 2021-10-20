import { ApolloServer, gql } from 'apollo-server';
import { User } from '@test-monorepo/utils';

const USERS: User[] = [
  {
    id: '1',
    name: 'Luca',
  },
  {
    id: '2',
    name: 'sahdfgaksjdhf',
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    user: (_: unknown, args: { id: string }) => {
      console.log('received ID: ' + args.id);
      return USERS.find((u) => u.id === args.id);
    },
    users: () => USERS,
  },
};

const port = process.env.port || 3333;
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
