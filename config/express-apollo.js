const { ApolloServer } = require('apollo-server-express');
// const gql = require('graphql-tag');
const { typeDefs, resolvers } = require('../graphql/schema');

const endpoint = '/graphql';

// const typeDefs = gql`
//   type Query {
//     message: String!
//   }
// `;
// const resolvers = {
//   Query: {
//     message: () => 'Hello World!',
//   }
// };

const config = (server) => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: { endpoint }
  });
  apollo.applyMiddleware({ app: server });
}

module.exports = config;
