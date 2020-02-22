const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../graphql/schema');

const enablePlayground = true;

/**
 * Integrate Apollo Server to Express.js
 * 
 * @param {*} app reference to Express.js server
 */
const config = (app) => {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: enablePlayground,
  });
  apollo.applyMiddleware({ app });
}

module.exports = config;
