import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit (screening) {
      let editedScreening = {};
      editedScreening.movie = this.get('movie');
      editedScreening.userRating = this.get('newRating');
      console.log('new rating is in fwf-screening comp and is', editedScreening);
      console.log(screening);
      console.log('this screening is', this.screening);
        this.sendAction('updateScreening', editedScreening);
    },

    delete () {
      console.log('screening is', this.get('screening'));
      return this.sendAction('delete', this.get('screening'));
    }
  },
});
