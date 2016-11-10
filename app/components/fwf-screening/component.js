import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      // edit (list) {
      //   console.log('I am in the listr-list Component');
      //   this.sendAction('list.edit', list);
      // },

      deleteScreening (screening) {
        console.log('in fwf-screening component deleteScreening action');
        console.log('passed in screening is', screening);
        return this.sendAction('deleteScreening', screening);
      },
    },
});
