import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  currentUserEmail: Ember.computed.alias('auth.credentials.email'),
  // currentUserName: Ember.computed.alias('profile.surname'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
