import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['movies'],

  actions: {
    // createScreening () {
    //   this.sendAction('createScreening', this.get('screening'));
    // }
    createScreening () {
      let newScreening = {};
      newScreening.movieId = this.get('movieId');
      newScreening.userRating = this.get('userRating');
      console.log('new screening is', newScreening);
        this.sendAction('submit', newScreening);
    }
  },
});
