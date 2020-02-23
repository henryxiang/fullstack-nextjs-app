const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../../graphql/schema');
const appConfig = require('../../config/app-config');
const getLogger = require('../../utils/log-factory');

const prefix = appConfig.baseDir + '/';
const log = getLogger(__dirname.replace(prefix, ''));

const enablePlayground = (appConfig.environment !== 'production');

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
  if (enablePlayground) {
    const { serverBaseUrl, port } = appConfig.http;
    log.info(`enabled GraphQL playground at ${serverBaseUrl}:${port}/graphql`);
  }
}

module.exports = config;
