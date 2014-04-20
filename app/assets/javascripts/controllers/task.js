App.TaskEditController = Em.ObjectController.extend({
  selected_status: null,
  all_task_status: [ { label: 'Incomplete', id: 0}, { label: 'Complete', id: 1 }, { label: 'Unsure', id: 2 } ],

  actions: {
    save: function(){
      var task = this.get('model');
      task.save().then(function() {
        task._data.subtasks.invoke('save');
      }, function() {
        task.rollback();
      });
      this.transitionToRoute('task', task);
    },
    removeTask: function () {
      var task = this.get('model');
      task.deleteRecord();
      task.save();
      this.transitionToRoute('tasks');
    },
    goBack: function() {
      this.transitionToRoute('task');
    }
  }
});

App.TaskController = Ember.ObjectController.extend({
  actions: {
    edit: function(){
      this.transitionToRoute('task.edit');
    },

    isCompleted: function(key, value){
      var model = this.get('model');

      if (value === undefined) {
        // property being used as a getter
        return model.get('isCompleted');
      } else {
        // property being used as setter
        model.set('isCompleted', value);
        model.save();
        return value;
      }
    }.property('model.isCompleted'),
  }
});
