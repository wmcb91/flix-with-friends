import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('movie');
  },

  actions: {
    createScreening (newScreening) {
      console.log('screening is in movies route');
      let screening = this.get('store').createRecord('screening', newScreening);
      screening.save();
    },
  }
});
