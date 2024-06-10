// Import the ApolloServer class from the @apollo/server package
const { ApolloServer } = require("@apollo/server");

// Import the startStandaloneServer function from the @apollo/server/standalone package
const { startStandaloneServer } = require("@apollo/server/standalone");

// Import addMocksToSchema and makeExecutableSchema for mock data trials
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// Import the GraphQL schema definitions from the local schema file
const typeDefs = require("./schema");

// Import resolvers and datasources
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

// Define an asynchronous function to start the Apollo Server
async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
    
    // Creat new instance of ApolloServer with provided schema definitions
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        const {cache} = server;
        return {
          dataSources: {
            trackAPI: new TrackAPI({cache}),
          },
        };
      },
    }); 

    // Verify server is running
    console.log(`
        Server is Running!
        Query at ${url}
        `);
}

// Call function to start the Apollo server
startApolloServer();