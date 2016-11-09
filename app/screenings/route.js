import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('screening');
  },

  actions: {
    createScreening (newScreening) {
      console.log('newScreening is in screenings route');
      let screening = this.get('store').createRecord('screening', newScreening);
      return screening.save();
    },
  }
});
