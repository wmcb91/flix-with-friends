import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('screening');
  },


  actions: {
    deleteScreening (screening) {
      console.log('in screening route delete action');
      console.log('passed in screening is', screening);
      screening = screening;
      screening.deleteRecord();
      return screening.save();
    },

    // edit (list) {
    //   console.log('I am in the list route');
    //   this.transitionTo('list.edit', list);
    // },
  }
});
