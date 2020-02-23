const fs = require('fs');
const path = require('path');
const gql = require('graphql-tag');

const schemaDir = 'schemas';

const root = gql`
  type Query {
    _root_: String
  }
  type Mutation {
    _root_: String
  }
`;
const typeDefs = [root];
let resolvers = {
  Query: {
    _root_: () => null,
  },
  Mutation: {
    _root_: () => null,
  }
};

const modules = fs
  .readdirSync(path.resolve(__dirname, schemaDir))
  .map(f => f.replace('.js', ''));

for (const module of modules) {
  const schema = require(`./${schemaDir}/${module}`);
  typeDefs.push(schema.typeDefs);
  resolvers = { ...resolvers, ...schema.resolvers };
}

module.exports = { typeDefs, resolvers };
