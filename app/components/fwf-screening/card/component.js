import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      // console.log('old rating is', this.screening.get('userRating'));
      // console.log('new rating is', this.get('newRating'));
      // this.screening.set('userRating', this.get('newRating'));
      // console.log('new set rating is', this.screening.get('userRating'));

      this.sendAction('updateScreening', this.screening, this.get('newRating'));
    },

    delete () {
      console.log('screening is', this.get('screening'));
      return this.sendAction('delete', this.get('screening'));
    }
  },
});
