import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  movies: DS.hasMany('movie'),
  screenings: DS.hasMany('screening')
});
