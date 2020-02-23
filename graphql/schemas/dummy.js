const gql = require('graphql-tag');

const typeDefs = gql`
  extend type Query {
    greet(name: String!): String!
  }
`;

const resolvers = {
  Query: {
    greet: (_, {name}) => `Hello, ${name}!`,
  }
};

module.exports = { typeDefs, resolvers }
