App.TasksController = Ember.ArrayController.extend({

  // hasCompleted: function () {
  //   return this.get('isCompleted') > 0;
  // }.property('@each.isCompleted'),

  // completed: function () {
  //   return this.filterProperty('isCompleted', true).get('length');
  // }.property('@each.isCompleted'),

  activeTasks: function() {
    return this.filterProperty('isCompleted', false);
  }.property('@each.isCompleted'),

  delayedTasks: function() {
    return this.filterProperty('isCompleted', true);
  }.property('@each.isCompleted'),

  comingTasks: function() {
    return this
    // return this.filterProperty('start
  }.property('@each.isCompleted')

});

