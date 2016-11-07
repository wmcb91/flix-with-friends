import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['movies'],

  form: {
    rating: null,
    done: false,
  },

  actions: {
    create (screening) {
      console.log('I am in the fwf-movie Component');
      this.sendAction('screening.crete', screening);
    },

    createScreening () {
      let newScreening = this.get('form');
      newScreening.movie = this.get('movie');

      this.sendAction('createScreening', newScreening);

      this.set('form.rating', null);
    }
  },
});
