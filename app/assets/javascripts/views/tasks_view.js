App.TasksView = Ember.View.extend();

App.DateField = Ember.TextField.extend({
  type: 'date',
  didInsertElement: function() {
    // return this.$().datepicker({
    //   dateFormat: 'MM d, yy',
    //   numberOfMonths: 2,
    //   showButtonPanel: true
    // });
  }
});
