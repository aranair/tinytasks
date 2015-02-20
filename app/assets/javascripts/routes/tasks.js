App.TasksRoute = Em.Route.extend({
  model: function() {
    // return this.get('store').find('task');
    this.store.find('task');
    return this.store.filter('task',function(model){
      return !model.get('isNew');
    });
  }
});
