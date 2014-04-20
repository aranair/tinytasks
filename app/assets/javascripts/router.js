App.Router.map(function() {
  // this.resource('tasks', { path: '/' }, function() {
  this.resource('tasks', { path: '/' }, function() {
    this.resource('task', { path: '/:task_id' }, function () {
      this.route('edit');
    });
    this.route('new');
  });
});
