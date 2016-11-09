import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('profile');

  this.route('movies');
  this.route('movie', { path: '/movies/:movie_id'});
  this.route('my-movies');

  this.route('watch-list');


  this.route('screenings');
  this.route('screening', { path: '/screenings/:screening_id'});
});

export default Router;
