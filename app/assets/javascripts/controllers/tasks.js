App.TasksNewController = Ember.ObjectController.extend({
  selected_status: null,
  all_task_status: [ { label: 'Incomplete', id: 0}, { label: 'Complete', id: 1 }, { label: 'Unsure', id: 2 } ],

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
    return this.get('content').filterProperty('isDelayed', false);
  }.property('@each.isDelayed'),

  delayedTasks: function() {
    return this.get('content').filterProperty('isDelayed', true);
  }.property('@each.isDelayed'),

  upcomingTasks: function() {
    return this.filterProperty('isUpcoming', true);
  }.property('@each.isUpcoming')
});

