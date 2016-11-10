import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // edit () {
    //   let newScreening = {};
    //   newScreening.movie = this.get('movie');
    //   newScreening.userRating = this.get('userRating');
    //   console.log('new rating is in fwf-movie comp and is', newScreening);
    //     this.sendAction('editScreening', newRating);
    // },

    delete () {
      console.log('in fwf-sc-card component delete');
      console.log('this.get(movie) is', this.get('movie'));
      return this.sendAction('delete', this.get('movie'));
    }
  },
});
