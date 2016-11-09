// Screening serializer
import ApplicationSerializer from 'flix-with-friends/application/serializer';

export default ApplicationSerializer.extend({
  // serialize () {
  //   let serialized = this._super(...arguments);
  //
  //   // serialized.movie_id = serialized.movieId;
  //   // delete serialized.movieId;
  //
  //   return serialized;
  //   // switch back from text to content as name API
  // },
  //
  // normalize (model, response) {
  //   // response.movieId = response.movie_id;
  //   // delete response.movie_id;
  //   return this._super(model, response);
  // },
});
