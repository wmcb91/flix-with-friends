import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => {
        this.get('flashMessages')
        .success('Password change successful.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
