// the data source in charge of calling the REST API and retrieving the data

const { RESTDataSource } = require('@apollo/datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }
  
    // Fetches all tracks to be displayed on the homepage grid.
    async getTracksForHome() {
      return this.get('tracks');
    }
  
    // Fetches the details of a specific author by their ID.
    async getAuthor(authorId) {
      return this.get(`author/${authorId}`);
    }
  
    // Fetches the details of a specific track by its ID.
    async getTrack(trackId) {
      return this.get(`track/${trackId}`)
    }
  
    // Fetches the modules associated with a specific track by its ID.
    getTrackModules(trackId) {
      return this.get(`track/${trackId}/modules`);
    }

    // Fetches number of view associated with a specific track ID
    incrementTrackViews(trackId) {
      return this.patch(`track/${trackId}/numberOfViews`);
    }
  }
  

module.exports = TrackAPI;
