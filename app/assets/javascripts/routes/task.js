App.TaskRoute = Em.Route.extend({
  // model: function(params) {
  //   return this.get('store').find('task', params.task_id)
  // },
  setupController: function(controller, task) {
    controller.set('model', task);
  }
});

App.TasksRoute = Em.Route.extend({
  model: function() {
    return this.get('store').find('task');
  }
});

App.TasksIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('task');
  }
});
