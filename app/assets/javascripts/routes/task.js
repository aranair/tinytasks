// Somehow needs to re-render this, taskroute is a resource and acts as a parent for its nested routes
// so technically taskindex is what you want
App.TaskIndexRoute = Ember.Route.extend({
   renderTemplate: function () {
      this.render('task', { into: 'tasks' });
   }
});

App.TaskRoute = Em.Route.extend({
  model: function(params) {
    return this.store.find('task', params.task_id)
  }
});
