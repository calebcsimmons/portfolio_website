const gql = require("graphql-tag"); // Used to wrap GraphQL strings that Apollo libraries expect

const typeDefs = gql`

    "Query to get tracks array for the homepage grid"
    type Query {
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        "Increment the number of views of a given track, when the specified track card is clicked"
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        "Represents status of mutation, similar to HTTP status code"
        code: Int!
        "Indicates whether mutation was successful"
        success: Boolean!
        "Message for the UI"
        message: String!
        "Newly updated track after successful mutation"
        track: Track
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {

        "the track's ID number"
        id: ID!
        "the tracks title"
        title: String!
        "the track's main author"
        author: Author!
        "the track's main illustration to display in the track card or track page detail"
        thumbnail: String
        "the track's approximate length to complete, in minutes"
        length: Int
        "the number of modules this track contains"
        modulesCount: Int 
        "the description of the track"
        description: String
        "the number of views the track has received"
        numberOfViews: Int
        "The track's complete array of Modules"
        modules: [Module!]!
    }

    "A Module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
        id: ID!
        "the Module's title"
        title: String!
        "The Module's length in minutes"
        length: Int
    }

    "Author of a complete track"
    type Author {
        id: ID!
        "Name of the author"
        name: String!
        "Photo of the author via URL"
        photo: String
    }
`;

module.exports = typeDefs;
