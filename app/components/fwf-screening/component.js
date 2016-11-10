import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      updateScreening (screening, newRating) {
        // console.log('I am in the listr-list Component');
        // console.log('editedScreening is', editedScreening);
        // return this.sendAction('updateScreening', editedScreening);
        this.sendAction('updateScreening', screening, newRating);
      },

      deleteScreening (screening) {
        console.log('in fwf-screening component deleteScreening action');
        console.log('passed in screening is', screening);
        return this.sendAction('deleteScreening', screening);
      },
    },
});
