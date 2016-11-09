import DS from 'ember-data';

export default DS.Model.extend({
  userID: DS.attr('number'),
  email: DS.attr('string'),
  username: DS.attr('string')
  // movies: DS.hasMany('movies')
});
