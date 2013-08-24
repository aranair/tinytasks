App.Router.map(function() {
  this.resource('tasks', {path: '/'}, function() {
    this.resource('task', {path: ':task_id'});
    // this.route('active');
    // this.route('completed');
  });
});

App.TaskRoute = Ember.Route.extend({
  model: function(params) {
    return App.Task.find(params.task_id)
  }
});

App.TasksRoute = Ember.Route.extend({
  model: function() {
    return App.Task.find();
  }
});

App.TasksIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Task.find();
  }
});

App.TasksActiveRoute = Ember.Route.extend({
  setupController: function () {
    // var tasks = App.Task.filter(function (task) {
    //   if (!task.get('isCompleted')) {
    //     return true;
    //   }
    // });
    // this.controllerFor('tasks').set('filteredTasks', tasks);
  }
});

App.TasksCompletedRoute = Ember.Route.extend({
  setupController: function () {
    // var tasks = App.Task.filter(function (task) {
    //   if (task.get('isCompleted')) {
    //     return true;
    //   }
    // });
    // this.controllerFor('tasks').set('filteredTasks', tasks);
  }
});


