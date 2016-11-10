import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('screening');
  },


  actions: {
    updateScreening (screening, newRating) {
      console.log('I am in the list route and screening is', screening);
      console.log('I am in the list route and newRating is', newRating);
      screening.set('userRating', newRating);
      return screening.save();
    },

    deleteScreening (screening) {
      screening.deleteRecord();
      // this.get('store').deleteRecord(screening);
      return screening.save();
    },
  }
});
