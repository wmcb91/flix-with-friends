import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('screening');
  },


  actions: {
    updateScreening (screening, newRating) {
      console.log('I am in the list route and screening is', screening);
      console.log('I am in the list route and newRating is', newRating);
      screening.set('userRating', newRating);
      return screening.save();
        // let newRating = updatedScreening.userRating;
        // let movieId = updatedScreening.movie.get('id');
        // console.log('new rating is', newRating);
        // console.log('screening movie id is', updatedScreening.movie);
        // console.log('screening movie id is', updatedScreening.movie_id);
        // console.log('screening movie id is', updatedScreening.movie.get('id'));
        // console.log('this screening is', this.get('store').findRecord('movie', movieId));
        // let screening = this.get('store').findRecord('movie');
        // screening.set('userRating', newRating);
        // console.log(screening);
        // this.screening.set('userRating', newRating);
      // this.transitionTo('list.edit', list);
    },

    deleteScreening (screening) {
      screening.deleteRecord();
      // this.get('store').deleteRecord(screening);
      return screening.save();
    },
  }
});
