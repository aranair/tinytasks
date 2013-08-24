App.Task = DS.Model.extend({
  name: DS.attr('string'),
  task_details: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
