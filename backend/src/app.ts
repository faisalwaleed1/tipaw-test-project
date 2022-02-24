const express = require('express');
const http = require('http');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolver');

const port = process.env.PORT || 3001;

const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/graphql'
  });

  httpServer.listen(port);

  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}

startApolloServer();
