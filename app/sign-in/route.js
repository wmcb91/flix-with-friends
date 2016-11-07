import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('application'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Email or password incorrect. Please try again.');
      });
    },
  },
});
