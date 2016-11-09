import DS from 'ember-data';

export default DS.Model.extend({
  userRating: DS.attr('number'),
  watchedRecently: DS.attr('boolean'),
  movie: DS.belongsTo('movie'),
  user: DS.belongsTo('user')
});
