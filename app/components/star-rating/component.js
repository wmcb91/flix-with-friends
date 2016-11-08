import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    updateRating(params) {
      const { item: movie, rating } = params;
      movie.set('rating', rating);
      return movie.save();
    }
  }
});
