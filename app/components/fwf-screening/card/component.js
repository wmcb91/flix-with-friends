import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      // console.log('old rating is', this.screening.get('userRating'));
      // console.log('new rating is', this.get('newRating'));
      // this.screening.set('userRating', this.get('newRating'));
      // console.log('new set rating is', this.screening.get('userRating'));
      if (this.get('newRating') > 0 && this.get('newRating') < 6 && this.get('newRating')%1 === 0){
        this.sendAction('updateScreening', this.screening, this.get('newRating'));
      } else {
        this.get('flashMessages')
        .danger('The rating you entered was not between 1 and 5');
        console.log('error');
      }
    },

    delete () {
      console.log('screening is', this.get('screening'));
      return this.sendAction('delete', this.get('screening'));
    }
  },
});
