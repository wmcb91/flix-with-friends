import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('movies');
  this.route('my-movies');
  this.route('profile');
  this.route('watch-list');
  this.route('screenings');
});

export default Router;
