App.TimeView = Ember.View.extend({
  didInsertElement: function() {
    return this.$().append(moment().format('MMMM Do YYYY'));
  }
});
