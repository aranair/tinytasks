App.TasksRoute = Em.Route.extend({
  model: function() {
    // return this.get('store').find('task');
    return this.store.find('task');
  }
});
// App.TasksIndexRoute = Ember.Route.extend({
//   model: function() {
//     return this.get('store').find('task');
//   }
// });

