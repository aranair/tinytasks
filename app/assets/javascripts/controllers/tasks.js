App.TasksController = Ember.ArrayController.extend({
  activeTasks: function() {
    return this.get('content').filterProperty('isDelayed', false);
  }.property('@each.isDelayed'),

  delayedTasks: function() {
    return this.get('content').filterProperty('isDelayed', true);
  }.property('@each.isDelayed'),

  upcomingTasks: function() {
    return this.filterProperty('isUpcoming', true);
  }.property('@each.isUpcoming')
});

