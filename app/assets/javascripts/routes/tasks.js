App.TasksRoute = Em.Route.extend({
  model: function() {
    return this.get('store').find('task');

    // ---- This will filter new models --- //
    // return this.store.filter('task',function(model){
    //   return !model.get('isNew');
    // });
  }
});
