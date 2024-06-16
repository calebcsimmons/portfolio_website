const resolvers = {

    //? Entry point for all data-fetching operations.
    Query: {
      
      // Returns array of Tracks used to populate the homepage grid of the web client
      tracksForHome: (_, __, { dataSources }) => {
        return dataSources.trackAPI.getTracksForHome();
      },
  
      // Get a single track by its ID, for the track page
      track: (_, { id }, { dataSources }) => {
        return dataSources.trackAPI.getTrack(id);
      },
    },

    //? Entry point for all mutation operations

    Mutation: {

      // Increments a track's numberOfViews property
      incrementTrackViews: async (_, { id }, { dataSources }) => {
        try {
          const track = await dataSources.trackAPI.incrementTrackViews(id);

          return {
            code: 200,
            success: true,
            message: `Successfully incremented number of views for track ${id}`,
            track
          }
        } catch (err) {
          return {
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            track: null
          }
        }
      },
    },


  
    //? Defines resolvers for fields of the Track object type.
    Track: {
      
      // Get the author details for a specific track using the authorId
      author: ({ authorId }, _, { dataSources }) => {
        return dataSources.trackAPI.getAuthor(authorId);
      },

      // Get the module details for a specific track using the trackId
      modules: ({ id }, _, { dataSources }) => {
        return dataSources.trackAPI.getTrackModules(id)
      }
    },
  };
  
  module.exports = resolvers;
  