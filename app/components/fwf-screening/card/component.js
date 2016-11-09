import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateRating () {
      let newScreening = {};
      newScreening.movie = this.get('movie');
      newScreening.userRating = this.get('userRating');
      console.log('new screening is in fwf-movie comp and is', newScreening);
        this.sendAction('createScreening', newScreening);
    }
  },
});
