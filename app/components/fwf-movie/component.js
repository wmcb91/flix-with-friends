import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['movies'],

  actions: {
    // createScreening () {
    //   this.sendAction('createScreening', this.get('screening'));
    // }
    createScreening () {
      let screening = {};
      screening.movieId = this.get('movieId');
      screening.userRating = this.get('userRating');
      console.log('screening is', screening);
        this.sendAction('submit', screening);
    }
  },
});
