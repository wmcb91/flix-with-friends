import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['movies'],

  actions: {
    // createScreening () {
    //   this.sendAction('createScreening', this.get('screening'));
    // }
    createScreening () {
      let newScreening = {};
      newScreening.movie = this.get('movieId');
      newScreening.userRating = this.get('userRating');
      console.log('new screening is in fwf-movie comp and is', newScreening);
        this.sendAction('createScreening', newScreening);
    }
  },
});
