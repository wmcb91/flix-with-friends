import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('movie');
  },

  actions: {
    createScreening (newScreening) {
      console.log('new screening is', newScreening);
      let screening = this.get('store').createRecord('screening', newScreening);
      return screening.save();
    },
  }

});
