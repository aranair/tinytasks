// this route will be used by the edit AND the create route
// in other words the edit and the create routes will inherit from this one
//
App.TaskCreateAndEditRoute = Ember.Route.extend({
  // when trying to manually access the route
  activate: function(){
    // this.controllerFor('task').setProperties({
    //   'editMode': true
    // });
  },
  deactivate: function(){
    // this.controllerFor('task').setProperties({
    //   'editMode': false
    // });
  }
});
