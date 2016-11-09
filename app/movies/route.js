import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('movie');
  },

  actions: {
    // createScreening () {
    //   console.log('in movies route');
    // }
    createScreening (newScreening) {
      console.log('newScreening is in movies route', newScreening);
      let screening = this.get('store').createRecord('screening', newScreening);
      console.log('screening in movie route is', screening);
      return screening.save();
    },
  }

});
