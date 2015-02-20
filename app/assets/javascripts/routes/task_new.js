App.TasksNewRoute = App.TaskCreateAndEditRoute.extend({
  model: function(){
    return this.store.createRecord('task');
    // return Em.Object.create({});
  },
  // in this case (the create route) we can re-use the user/edit template
  // associated with the usersCreateController
  renderTemplate: function(){
    this.render('task.edit', { controller: 'tasks.new' });
  }
});
