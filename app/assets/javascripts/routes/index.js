App.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionToRoute('tasks');
  }
})
