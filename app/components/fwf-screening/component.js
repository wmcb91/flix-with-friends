import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      updateScreening (editedScreening) {
        console.log('I am in the listr-list Component');
        console.log('editedScreening is', editedScreening);
        return this.sendAction('updateScreening', editedScreening);
      },

      deleteScreening (screening) {
        console.log('in fwf-screening component deleteScreening action');
        console.log('passed in screening is', screening);
        return this.sendAction('deleteScreening', screening);
      },
    },
});
