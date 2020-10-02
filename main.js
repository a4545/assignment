const { ApolloServer, gql } = require('apollo-server');
const db = require("./DbConnection.js")
const typeDefs = require("./types");
const resolvers = require("./resolver");

const server = new ApolloServer({ 
    
      context:{db},
     typeDefs,
      resolvers 
    });

server.listen(3000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});