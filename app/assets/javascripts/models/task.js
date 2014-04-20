App.Task = DS.Model.extend({
  subtasks: DS.hasMany('subtask'),
  name: DS.attr('string'),
  task_details: DS.attr('string'),
  task_status: DS.attr('number'),
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
  }.property('name'),

  isDelayed: function() {
    var today = new Date();
    return (new Date(this.get('start_date'))) < today && (new Date(this.get('end_date'))) > today && this.get('task_status') == 0
  }.property('start_date', 'end_date', 'task_status'),
  
  isUpcoming: function() {
    var today = new Date();
    return (new Date(this.get('start_date'))) > today && (new Date(this.get('end_date'))) > today && this.get('task_status') == 0
  }.property('start_date', 'end_date', 'task_status'),

  task_completed: function () {
    return this.get('task_status') == 1
  }.property('task_status')
});

