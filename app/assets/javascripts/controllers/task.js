App.TaskController = Ember.ObjectController.extend({
  isEditing: false,
  all_task_status: [ { label: 'Incomplete', id: '0'}, { label: 'Complete', id: '0'}, { label: 'Unsure', id: '2'}],

  actions: {
    editTask: function() {
      this.toggleProperty('isEditing')
    },

    doneEditing: function() {
      task = this.get('model');

      task.save().then(function() {
        task._data.subtasks.invoke('save');
      }, function() {
        task.rollback();
      });

      this.toggleProperty('isEditing')
    },

    cancelEdit: function() {
      model = this.get('model');
      if(model && model.get('isDirty')) {
        model.rollback();
      }
      this.toggleProperty('isEditing')
    },

    removeTask: function () {
      var task = this.get('model');
      task.deleteRecord();
      task.save();
      this.toggleProperty('isEditing')
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
