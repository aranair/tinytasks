App.TaskEditRoute = App.TaskCreateAndEditRoute.extend({
  renderTemplate: function() {
    this.render('task/edit', {
      into: 'tasks',
      controller: 'task.edit'
    });
  },
  model: function() {
    return this.modelFor('task');
  }
})
