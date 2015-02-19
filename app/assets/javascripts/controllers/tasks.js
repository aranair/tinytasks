App.TasksNewController = Ember.ObjectController.extend({
  selected_status: null,
  all_task_status: [ 
    { label: 'Untouched', id: -1 }, // Not started
    { label: 'Ongoing', id: 0 }, // Started by not complete
    { label: 'Complete', id: 1 },  // Started and complete
    { label: 'Unsure', id: 2 }  // ?!
  ],

  actions: {
    save: function() {
      var newTask = this.store.createRecord('task', this.get('model'));
      newTask.save();
      this.transitionToRoute('task', newTask);
    },

    cancelEdit: function() {
      model = this.get('model');
      if(model && model.get('isDirty')) {
        model.rollback();
      }
    },

    goBack: function() {
      this.transitionToRoute('tasks');
    }
  }
});

App.TasksController = Ember.ArrayController.extend({
  activeTasks: function() {
    return this.get('content').filterProperty('isActive', true);
  }.property('@each.isActive'),

  completedTasks: function() {
    return this.get('content').filterProperty('task_status', 1);
  }.property('@each.task_status'),

  upcomingTasks: function() {
    return this.filterProperty('isUpcoming', true);
  }.property('@each.isUpcoming'),

});

