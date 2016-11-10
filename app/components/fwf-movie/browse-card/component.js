import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createScreening () {
      let rating = this.get('userRating');
      if (rating > 0 && rating < 6 && rating%1 === 0){
        let newScreening = {};
        newScreening.movie = this.get('movie');
        newScreening.userRating = this.get('userRating');
        this.sendAction('createScreening', newScreening);
      }  else {
          this.get('flashMessages')
          .danger('The rating you entered was not between 1 and 5');
          console.log('error');
        }
    }
  },
});
