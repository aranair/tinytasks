App.TaskView = Ember.View.extend({
  templateName: 'task'
});

App.TaskNewView = Ember.View.extend({
  controller: 'App.TaskNewController'
});
var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});
