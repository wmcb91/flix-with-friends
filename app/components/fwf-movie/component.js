import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['movies'],

  actions: {
    createScreening (newScreening) {
        this.sendAction('createScreening', newScreening);
    }
  },
});
