App.Subtask = DS.Model.extend({
  url: 'tasks',
  task: DS.belongsTo('task'),
  name: DS.attr('string'),
  task_details: DS.attr('string'),
  task_status: DS.attr('string'),
  start_date: DS.attr('customdate'),
  end_date: DS.attr('customdate'),

  shortName: function() {
    if (!this.get('name')) { 
      return '' 
    } else if (this.get('name').length >= 50) {
      return this.get('name').substring(0,70) + ' ...';
    } else {
      return this.get('name')
    }
  }.property('name')
});

App.Subtask.reopen({
  url:'tasks'
});
// App.SubtaskAdapter = DS.RESTAdapter.extend({
//   namespace: 'tasks'
// });
