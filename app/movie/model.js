import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  director: DS.attr('string'),
  yearReleased: DS.attr('number'),
  genre: DS.attr('string'),
  rating: DS.attr('string'),
  movieId: DS.attr('number'),

  actions: {
    createScreening (newScreening) {
      console.log('screening is in movie model');
      let screening = this.get('store').createRecord('screening', newScreening);
      screening.save();
    }
  },

});
